

from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os


from cart import cart_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(cart_bp)

# Путь к базе данных
DB_PATH = os.path.join(os.path.dirname(__file__), 'users.db')

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
        phone TEXT PRIMARY KEY,
        password TEXT NOT NULL
    )''')
    conn.commit()
    conn.close()

init_db()


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    phone = data.get('phone')
    password = data.get('password')
    if not phone or not password:
        return jsonify({'success': False, 'message': 'Заполните все поля'}), 400
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT phone FROM users WHERE phone = ?', (phone,))
    if c.fetchone():
        conn.close()
        return jsonify({'success': False, 'message': 'Пользователь уже существует'}), 409
    c.execute('INSERT INTO users (phone, password) VALUES (?, ?)', (phone, password))
    conn.commit()
    conn.close()
    return jsonify({'success': True, 'message': 'Регистрация успешна'})


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    phone = data.get('phone')
    password = data.get('password')
    if not phone or not password:
        return jsonify({'success': False, 'message': 'Заполните все поля'}), 400
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT password FROM users WHERE phone = ?', (phone,))
    row = c.fetchone()
    conn.close()
    if not row or row[0] != password:
        return jsonify({'success': False, 'message': 'Неверный телефон или пароль'}), 401
    return jsonify({'success': True, 'message': 'Вход выполнен'})

if __name__ == '__main__':
    app.run(debug=True)
