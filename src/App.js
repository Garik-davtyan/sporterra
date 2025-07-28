import Cart from "./components/Cart";
import Register from "./components/Register";
import React from "react";
import "./styles/app.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Women
// MEN
import MenTshirts from "./pages/Men/MenTshirts";
import MenHoodies from "./pages/Men/MenHoodies";
import MenShorts from "./pages/Men/MenShorts";
import MenSweatpants from "./pages/Men/MenSweatpants";
import MenTankTops from "./pages/Men/MenTankTops";
import MenTrainingShorts from "./pages/Men/MenTrainingShorts";
import MenUnderwear from "./pages/Men/MenUnderwear";
import MenShoes from "./pages/Men/MenShoes";

// WOMEN
import WomenLeggings from "./pages/Women/WomenLeggings";
import WomenTops from "./pages/Women/WomenTops";
import WomenTankTops from "./pages/Women/WomenTankTops";
import WomenTrainingShorts from "./pages/Women/WomenTrainingShorts";
import WomenUnderwear from "./pages/Women/WomenUnderwear";
import WomenShoes from "./pages/Women/WomenShoes";

// COMBAT GEAR
import CombatBoxingGloves from "./pages/CombatGear/BoxingGloves";
import CombatMMAGloves from "./pages/CombatGear/MMAGloves";
import CombatHandWraps from "./pages/CombatGear/HandWraps";
import CombatHeadguards from "./pages/CombatGear/Headguards";
import CombatPunchingBags from "./pages/CombatGear/PunchingBags";
import CombatJumpRopes from "./pages/CombatGear/JumpRopes";

// ACCESSORIES
import AccessoriesGymBags from "./pages/Accessories/GymBags";
import AccessoriesWaterBottles from "./pages/Accessories/WaterBottles";
import AccessoriesTowels from "./pages/Accessories/Towels";
import AccessoriesOtherGear from "./pages/Accessories/OtherGear";
// New
import NewVenum from "./pages/New/NewVenum";
import NewSquatwolf from "./pages/New/NewSquatwolf";
import WomenShorts from "./pages/Women/WomenShorts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* MEN */}
          <Route path="/men/tshirts" element={<MenTshirts />} />
          <Route path="/men/hoodies" element={<MenHoodies />} />
          <Route path="/men/shorts" element={<MenShorts />} />
          <Route path="/men/sweatpants" element={<MenSweatpants />} />
          <Route path="/men/tanktops" element={<MenTankTops />} />
          <Route path="/men/trainingshorts" element={<MenTrainingShorts />} />
          <Route path="/men/underwear" element={<MenUnderwear />} />
          <Route path="/men/shoes" element={<MenShoes />} />

          {/* WOMEN */}
          <Route path="/women/leggings" element={<WomenLeggings />} />
          <Route path="/women/shorts" element={<WomenShorts />} />
          <Route path="/women/tops" element={<WomenTops />} />
          <Route path="/women/tanktops" element={<WomenTankTops />} />
          <Route path="/women/trainingshorts" element={<WomenTrainingShorts />} />
          <Route path="/women/underwear" element={<WomenUnderwear />} />
          <Route path="/women/shoes" element={<WomenShoes />} />

          {/* COMBAT GEAR */}
          <Route path="/combat/boxinggloves" element={<CombatBoxingGloves />} />
          <Route path="/combat/mmagloves" element={<CombatMMAGloves />} />
          <Route path="/combat/handwraps" element={<CombatHandWraps />} />
          <Route path="/combat/headguards" element={<CombatHeadguards />} />
          <Route path="/combat/punchingbags" element={<CombatPunchingBags />} />
          <Route path="/combat/jumpropes" element={<CombatJumpRopes />} />

          {/* ACCESSORIES */}
          <Route path="/accessories/gymbags" element={<AccessoriesGymBags />} />
          <Route path="/accessories/waterbottles" element={<AccessoriesWaterBottles />} />
          <Route path="/accessories/towels" element={<AccessoriesTowels />} />
          <Route path="/accessories/othergear" element={<AccessoriesOtherGear />} />

          {/* New */}
          <Route path="/new/venum" element={<NewVenum />} />
          <Route path="/new/squatwolf" element={<NewSquatwolf />} />
          {/* Корзина, вход, регистрация */}
          <Route path="/cart" element={<Cart />} />
          
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;