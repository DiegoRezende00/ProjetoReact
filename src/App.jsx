import React from 'react'
import './App.css'
import './components/Header/NavBar.css'
import Navbar from './components/header/NavBar.jsx'
import ItemListContainer from './components/Cart/ItemListContainer.jsx'


function App() {
  return(
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  )
}
export default App


  {/* <ProdutoJSX name="Curso JS: CoderHouse" price="Preço: R$ 199,99" />
  <ProdutoJSX name="Curso HTML: CoderHouse" price="Preço: R$ 299,99" />
  <ProdutoJSX name="Curso DATA: CoderHouse" price="Preço: R$ 499,99" />
  <ProdutoJSX name="Curso REACT: CoderHouse" price="Preço: R$ 599,99" />
  <ProdutoJSX name="Curso UX: CoderHouse" price="Preço: R$ 1199,99" /> */}
