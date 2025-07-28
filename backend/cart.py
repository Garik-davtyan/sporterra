
import sqlite3
import os
from flask import Blueprint, request, jsonify

DB_PATH = os.path.join(os.path.dirname(__file__), 'users.db')

cart_bp = Blueprint('cart', __name__)

# Инициализация таблицы корзины
def init_cart_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS cart (
        phone TEXT,
        product_id INTEGER,
        quantity INTEGER DEFAULT 1,
        PRIMARY KEY (phone, product_id)
    )''')
    conn.commit()
    conn.close()

init_cart_db()

# Получить корзину пользователя
@cart_bp.route('/cart', methods=['GET'])
def get_cart():
    phone = request.args.get('phone')
    if not phone:
        return jsonify({'success': False, 'message': 'Нет телефона'}), 400
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT product_id, quantity FROM cart WHERE phone = ?', (phone,))
    items = [{'product_id': row[0], 'quantity': row[1]} for row in c.fetchall()]
    conn.close()
    return jsonify({'success': True, 'cart': items})

# Добавить товар в корзину
@cart_bp.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    phone = data.get('phone')
    product_id = data.get('product_id')
    quantity = data.get('quantity', 1)
    if not phone or not product_id:
        return jsonify({'success': False, 'message': 'Нет телефона или товара'}), 400
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    # Если товар уже есть, увеличить количество
    c.execute('SELECT quantity FROM cart WHERE phone = ? AND product_id = ?', (phone, product_id))
    row = c.fetchone()
    if row:
        c.execute('UPDATE cart SET quantity = quantity + ? WHERE phone = ? AND product_id = ?', (quantity, phone, product_id))
    else:
        c.execute('INSERT INTO cart (phone, product_id, quantity) VALUES (?, ?, ?)', (phone, product_id, quantity))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

# Удалить товар из корзины
@cart_bp.route('/cart', methods=['DELETE'])
def remove_from_cart():
    data = request.get_json()
    phone = data.get('phone')
    product_id = data.get('product_id')
    if not phone or not product_id:
        return jsonify({'success': False, 'message': 'Нет телефона или товара'}), 400
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('DELETE FROM cart WHERE phone = ? AND product_id = ?', (phone, product_id))
    conn.commit()
    conn.close()
    return jsonify({'success': True})
