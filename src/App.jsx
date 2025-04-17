
import Navbar from "./Pages/navbar/Navbar"
import Hero from './Pages/Hero'
import { Route, Routes } from "react-router-dom"
import Login from "./componants/Auth/Login"
import Register from "./componants/Auth/Register"
import Services from "./Pages/Services"
import FirstCategory from "./Pages/categorys/FristCategory"
import SecondCategory from "./Pages/categorys/SecondCategory"
import BrandProducts from "./Pages/BrandProducts"
import Advertisement from "./Pages/Advertisement"
import Recentnew from "./Pages/Recentnew"
import Footer from "./Pages/Footer"
import ShopPage from "./Pages/ShopPage"
import Cart from "./Pages/Cart"
import ProductDetails from "./Pages/ProductDetails"
import About from "./Pages/About"
import ContactUs from "./Pages/ContactUs"
import FavoriteProducts from "./Pages/FavoriteProducts"



function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={
          <>

            <Navbar />
            <Hero />
            <Services/>
            <FirstCategory/>
            <SecondCategory/>
            <BrandProducts/>
            <Advertisement/>
            <Recentnew/>
            <Footer/>
          </>

        } />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorite" element={<FavoriteProducts/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>

    </>
  )
}

export default App
