// import React, { useContext } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import './components/Header/NavBar.css'
import Navbar from './components/header/NavBar.jsx'
import Checkout from './components/Header/checkout.jsx'
import Item from "./components/Cart/Item.jsx";
import ProductDetail from "./components/Cart/ProductDetail.jsx"
import Categoria from "./components/Products/Category.jsx"
import { CartProvider } from "./components/CartContext/CartContext.jsx"
import { Cart } from "./components/Cart/Cart.jsx"



//Página principal onde estão todas as rotas da página


function App() {  
  return(
    <CartProvider >
    <BrowserRouter>
         <Navbar />  
        <hr />    
       <Routes>
          <Route path="/" element={<Item />}></Route>
          <Route path="/index.html" element={<Item />}></Route>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={< Cart/>}></Route>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path="/product/:category" element={<Categoria />}></Route>
        </Routes>
        <hr />
        
        <footer>fim da página</footer>
     </BrowserRouter>
     </CartProvider>
  )
}
export default App


  {/* <ProdutoJSX name="Curso JS: CoderHouse" price="Preço: R$ 199,99" />
  <ProdutoJSX name="Curso HTML: CoderHouse" price="Preço: R$ 299,99" />
  <ProdutoJSX name="Curso DATA: CoderHouse" price="Preço: R$ 499,99" />
  <ProdutoJSX name="Curso REACT: CoderHouse" price="Preço: R$ 599,99" />
  <ProdutoJSX name="Curso UX: CoderHouse" price="Preço: R$ 1199,99" /> */}

//   <BrowserRouter>
//   <Routes>
//     <Navbar />
//     <Route path='/' element={<>Home</>}/>
//     <Route path='/Produtos1' element={<>Produtos1</>}/>
//     <Route path='/Produtos2' element={<>Produtos2</>}/>
//     <Route path='/Produtos3' element={<>Produtos3</>}/>
//     <Route path='/Cart' element={<>Cart</>}/>
//     <ItemListContainer />    
//   </Routes>
// </ BrowserRouter >