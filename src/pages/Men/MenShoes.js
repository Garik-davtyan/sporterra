import React, { useState } from "react";
import logo2 from "../../image/logo2.jpg";
import img1 from "../pagesimage/vnmufc-00297-004,1.jpg";
import img2 from "../pagesimage/vnmufc-00297-004,2.jpg";
import img3 from "../pagesimage/vnmufc-00297-004,3.jpg";
import "../../styles/pageCommon.css";

const products = [
  { id: 1, title: "Название обуви 1", desc: "Описание обуви 1", price: 557, oldPrice: 900, season: "", images: [img1, img2, img3], discount: true },
  { id: 2, title: "Название обуви 2", desc: "Описание обуви 2", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: true },
  { id: 3, title: "Название обуви 3", desc: "Описание обуви 3", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 4, title: "Название обуви 4", desc: "Описание обуви 4", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 5, title: "Название обуви 5", desc: "Описание обуви 5", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 6, title: "Название обуви 6", desc: "Описание обуви 6", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 7, title: "Название обуви 7", desc: "Описание обуви 7", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 8, title: "Название обуви 8", desc: "Описание обуви 8", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 9, title: "Название обуви 9", desc: "Описание обуви 9", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 10, title: "Название обуви 10", desc: "Описание обуви 10", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 11, title: "Название обуви 11", desc: "Описание обуви 11", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 12, title: "Название обуви 12", desc: "Описание обуви 12", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 13, title: "Название обуви 13", desc: "Описание обуви 13", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 14, title: "Название обуви 14", desc: "Описание обуви 14", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 15, title: "Название обуви 15", desc: "Описание обуви 15", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 16, title: "Название обуви 16", desc: "Описание обуви 16", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 17, title: "Название обуви 17", desc: "Описание обуви 17", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 18, title: "Название обуви 18", desc: "Описание обуви 18", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 19, title: "Название обуви 19", desc: "Описание обуви 19", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 20, title: "Название обуви 20", desc: "Описание обуви 20", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 21, title: "Название обуви 21", desc: "Описание обуви 21", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 22, title: "Название обуви 22", desc: "Описание обуви 22", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 23, title: "Название обуви 23", desc: "Описание обуви 23", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 24, title: "Название обуви 24", desc: "Описание обуви 24", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 25, title: "Название обуви 25", desc: "Описание обуви 25", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 26, title: "Название обуви 26", desc: "Описание обуви 26", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 27, title: "Название обуви 27", desc: "Описание обуви 27", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 28, title: "Название обуви 28", desc: "Описание обуви 28", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 29, title: "Название обуви 29", desc: "Описание обуви 29", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 30, title: "Название обуви 30", desc: "Описание обуви 30", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 31, title: "Название обуви 31", desc: "Описание обуви 31", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 32, title: "Название обуви 32", desc: "Описание обуви 32", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 33, title: "Название обуви 33", desc: "Описание обуви 33", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 34, title: "Название обуви 34", desc: "Описание обуви 34", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 35, title: "Название обуви 35", desc: "Описание обуви 35", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 36, title: "Название обуви 36", desc: "Описание обуви 36", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 37, title: "Название обуви 37", desc: "Описание обуви 37", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 38, title: "Название обуви 38", desc: "Описание обуви 38", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 39, title: "Название обуви 39", desc: "Описание обуви 39", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 40, title: "Название обуви 40", desc: "Описание обуви 40", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 41, title: "Название обуви 41", desc: "Описание обуви 41", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 42, title: "Название обуви 42", desc: "Описание обуви 42", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 43, title: "Название обуви 43", desc: "Описание обуви 43", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 44, title: "Название обуви 44", desc: "Описание обуви 44", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 45, title: "Название обуви 45", desc: "Описание обуви 45", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 46, title: "Название обуви 46", desc: "Описание обуви 46", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 47, title: "Название обуви 47", desc: "Описание обуви 47", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 48, title: "Название обуви 48", desc: "Описание обуви 48", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 49, title: "Название обуви 49", desc: "Описание обуви 49", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
  { id: 50, title: "Название обуви 50", desc: "Описание обуви 50", price: 0, oldPrice: 0, season: "", images: [img1, img2, img3], discount: false },
];

const seasons = ["все", "зима", "весна", "лето", "осень"];

export default function MenShoes() {
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

  React.useEffect(() => {
    setSliderIndexes(filtered.map(() => 0));
  }, [season, minPrice, maxPrice, onlyDiscount]);

  return (
    <div className="page-container">
      <img src={logo2} alt="logo" className="page-logo" />
      <h2>Мужская обувь</h2>
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
