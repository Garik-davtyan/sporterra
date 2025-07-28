import React, { useState } from "react";
import logo2 from "../../image/logo2.jpg";
import img1 from "../pagesimage/lecoqnaski1.jpg";
import img2 from "../pagesimage/lecoqnaski2.jpg";
import img3 from "../pagesimage/lecoqnaski3.jpg";
import img4 from "../pagesimage/lecoqnaskik1.jpg";
import img5 from "../pagesimage/lecoqnaskik2.jpg";
import img6 from "../pagesimage/lecoqnaskik3.jpg";
import img7 from "../pagesimage/lecoqnaskis1.jpg";
import img8 from "../pagesimage/lecoqnaskis2.jpg";
import img9 from "../pagesimage/lecoqnaskis3.jpg";
import img10 from "../pagesimage/lecoqnaskis3.jpg";
import img11 from "../pagesimage/lecoqnaskis3.jpg";
import img12 from "../pagesimage/lecoqnaskis3.jpg";
import "../../styles/pageCommon.css";

const products = [
  { id: 1, title: "Le Coq Sportif носки", desc: "2210752.ESS Chaus Haute X2", price:  3900, oldPrice: 6500, season: "", images: [img1, img2, img3], discount: true },
  { id: 2, title: "Le Coq Sportif носки", desc: "2210750.ESS Chaus Haute X2", price: 3900, oldPrice: 0, season: "", images: [img4, img5, img6], discount: false },
  { id: 3, title: "Le Coq Sportif носки", desc: "2210753.ESS Chaus Haute X2", price: 3900, oldPrice: 0, season: "", images: [img7, img8, img9], discount: false },
  { id: 4, title: "Le Coq Sportif носки", desc: "Описание товара 4", price: 0, oldPrice: 0, season: "", images: [img10, img11, img12], discount: false },
  { id: 5, title: "Название товара 5", desc: "Описание товара 5", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 6, title: "Название товара 6", desc: "Описание товара 6", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 7, title: "Название товара 7", desc: "Описание товара 7", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 8, title: "Название товара 8", desc: "Описание товара 8", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 9, title: "Название товара 9", desc: "Описание товара 9", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 10, title: "Название товара 10", desc: "Описание товара 10", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 11, title: "Название товара 11", desc: "Описание товара 11", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 12, title: "Название товара 12", desc: "Описание товара 12", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 13, title: "Название товара 13", desc: "Описание товара 13", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 14, title: "Название товара 14", desc: "Описание товара 14", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 15, title: "Название товара 15", desc: "Описание товара 15", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 16, title: "Название товара 16", desc: "Описание товара 16", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 17, title: "Название товара 17", desc: "Описание товара 17", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 18, title: "Название товара 18", desc: "Описание товара 18", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 19, title: "Название товара 19", desc: "Описание товара 19", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 20, title: "Название товара 20", desc: "Описание товара 20", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 21, title: "Название товара 21", desc: "Описание товара 21", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 22, title: "Название товара 22", desc: "Описание товара 22", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 23, title: "Название товара 23", desc: "Описание товара 23", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 24, title: "Название товара 24", desc: "Описание товара 24", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 25, title: "Название товара 25", desc: "Описание товара 25", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 26, title: "Название товара 26", desc: "Описание товара 26", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 27, title: "Название товара 27", desc: "Описание товара 27", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 28, title: "Название товара 28", desc: "Описание товара 28", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 29, title: "Название товара 29", desc: "Описание товара 29", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 30, title: "Название товара 30", desc: "Описание товара 30", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 31, title: "Название товара 31", desc: "Описание товара 31", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 32, title: "Название товара 32", desc: "Описание товара 32", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 33, title: "Название товара 33", desc: "Описание товара 33", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 34, title: "Название товара 34", desc: "Описание товара 34", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 35, title: "Название товара 35", desc: "Описание товара 35", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 36, title: "Название товара 36", desc: "Описание товара 36", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 37, title: "Название товара 37", desc: "Описание товара 37", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 38, title: "Название товара 38", desc: "Описание товара 38", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 39, title: "Название товара 39", desc: "Описание товара 39", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 40, title: "Название товара 40", desc: "Описание товара 40", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 41, title: "Название товара 41", desc: "Описание товара 41", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 42, title: "Название товара 42", desc: "Описание товара 42", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 43, title: "Название товара 43", desc: "Описание товара 43", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 44, title: "Название товара 44", desc: "Описание товара 44", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 45, title: "Название товара 45", desc: "Описание товара 45", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 46, title: "Название товара 46", desc: "Описание товара 46", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 47, title: "Название товара 47", desc: "Описание товара 47", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 48, title: "Название товара 48", desc: "Описание товара 48", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 49, title: "Название товара 49", desc: "Описание товара 49", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 50, title: "Название товара sdfgh erty", desc: "Описание товара hjdekkdj jjeiiuej jjdiiej 75bdj jjjdd", price: 15000, oldPrice: 27000, season: "", images: [img1, img2, img3], discount: true },
];

const seasons = ["все", "зима", "весна", "лето", "осень"];


export default function MenUnderwear() {
  const [season, setSeason] = useState("все");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [sliderIndexes, setSliderIndexes] = useState(products.map(() => 0));
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleSeasonChange = (e) => setSeason(e.target.value);
  const handleMinPrice = (e) => setMinPrice(e.target.value);
  const handleMaxPrice = (e) => setMaxPrice(e.target.value);
  const handleDiscount = (e) => setOnlyDiscount(e.target.checked);

  const filtered = products.filter((p) => {
    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);
    return (
      (season === "все" || p.season === season) &&
      p.price >= min &&
      p.price <= max &&
      (!onlyDiscount || p.discount)
    );
  });

  const nextImg = (idx) => {
    setSliderIndexes((prev) => {
      const arr = [...prev];
      arr[idx] = (arr[idx] + 1) % filtered[idx].images.length;
      return arr;
    });
  };
  const prevImg = (idx) => {
    setSliderIndexes((prev) => {
      const arr = [...prev];
      arr[idx] = (arr[idx] - 1 + filtered[idx].images.length) % filtered[idx].images.length;
      return arr;
    });
  };

  // Сбросить индексы слайдера при изменении фильтра
  React.useEffect(() => {
    setSliderIndexes(filtered.map(() => 0));
  }, [season, minPrice, maxPrice, onlyDiscount]);

  return (
    <div className="page-container">
      <img src={logo2} alt="logo" className="page-logo" />
      <h2>Мужские nijnie belyo</h2>
      <button
        className="filter-burger"
        onClick={() => setFiltersOpen((v) => !v)}
        aria-label="Открыть фильтры"
      >
        <span className="filter-burger-lines">
          <span className="filter-burger-line" />
          <span className="filter-burger-line" />
          <span className="filter-burger-line" />
        </span>
      </button>
      <div className={`filters-row${filtersOpen ? ' open' : ''}`} style={{position:'relative'}}>
        <select className="product-filter-select" value={season} onChange={handleSeasonChange}>
          {seasons.map((s) => (
            <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
        <input
          type="number"
          min={0}
          max={maxPrice || undefined}
          value={minPrice}
          onChange={handleMinPrice}
          placeholder="Мин. цена"
          style={{padding:'8px 12px',borderRadius:8,border:'1px solid #c4fa08',width:100}}
        />
        
        <input
          type="number"
          min={minPrice || 0}
          max={20000}
          value={maxPrice}
          onChange={handleMaxPrice}
          placeholder="Макс. цена"
          style={{padding:'8px 12px',borderRadius:8,border:'1px solid #c4fa08',width:100}}
        />
        <label style={{display:'flex',alignItems:'center',gap:6,marginLeft:16,fontSize:'1em',userSelect:'none'}}>
          <input type="checkbox" checked={onlyDiscount} onChange={handleDiscount} style={{accentColor:'#c4fa08',width:18,height:18}} />
          Только со скидкой
        </label>
      </div>
      <div className="cards-row">
        {filtered.length === 0 ? (
          <div style={{color:'#888',fontSize:'1.2em',marginTop:40}}>Нет товаров по выбранным фильтрам</div>
        ) : (
          filtered.map((product, idx) => (
            <div className="product-card" key={product.id}>
              <div style={{position:'relative', width:'100%', height:'210px'}}>
                <img src={product.images[sliderIndexes[idx]]} alt={product.title} className="product-card-img" />
                <button onClick={()=>prevImg(idx)} style={{position:'absolute',top:'50%',left:10,transform:'translateY(-50%)',background:'#fff',border:'none',borderRadius:'50%',width:32,height:32,cursor:'pointer',fontSize:20,boxShadow:'0 2px 8px #0002'}}>‹</button>
                <button onClick={()=>nextImg(idx)} style={{position:'absolute',top:'50%',right:10,transform:'translateY(-50%)',background:'#fff',border:'none',borderRadius:'50%',width:32,height:32,cursor:'pointer',fontSize:20,boxShadow:'0 2px 8px #0002'}}>›</button>
                <div style={{position:'absolute',bottom:10,left:'50%',transform:'translateX(-50%)',display:'flex',gap:6}}>
                  {product.images.map((_,i)=>(<span key={i} style={{width:8,height:8,borderRadius:'50%',background:sliderIndexes[idx]===i?'#c4fa08':'#ccc',display:'inline-block'}} />))}
                </div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-desc">{product.desc}</p>
                <div className="product-card-bottom">
                  {product.discount && product.oldPrice && product.oldPrice > product.price ? (
                    <>
                      <span style={{textDecoration:'line-through', color:'#888', marginRight:8, fontSize:'0.98em'}}>
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                      <span className="product-card-price">{product.price ? product.price.toLocaleString() : ''} ₽</span>
                    </>
                  ) : (
                    <span className="product-card-price">{product.price ? product.price.toLocaleString() : ''} ₽</span>
                  )}
                  <button className="product-card-btn">В корзину</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
