import React from 'react'
import './App.css'
import ProdutoJSX from './Product'

const retornoAPI = [
  {
    name: "Curso JS: CoderHouse",
    price: "Preço: R$ 199,99"
  },
  {
    name: "Curso HTML: CoderHouse",
    price: "Preço: R$ 299,99"
  },
  {
    name: "Curso DATA: CoderHouse",
    price: "Preço: R$ 499,99"
  },
  {
    name: "Curso REACT: CoderHouse",
    price: "Preço: R$ 599,99"
  },
  {
    name: "Curso UX: CoderHouse",
    price: "Preço: R$ 1199,99"
  },
]


function App() {
  return (
    <>
  {retornoAPI.map((curso) => (
  < ProdutoJSX name={curso.name} price={curso.price}/>
  ))}
    </>
  )
}

export default App


  {/* <ProdutoJSX name="Curso JS: CoderHouse" price="Preço: R$ 199,99" />
  <ProdutoJSX name="Curso HTML: CoderHouse" price="Preço: R$ 299,99" />
  <ProdutoJSX name="Curso DATA: CoderHouse" price="Preço: R$ 499,99" />
  <ProdutoJSX name="Curso REACT: CoderHouse" price="Preço: R$ 599,99" />
  <ProdutoJSX name="Curso UX: CoderHouse" price="Preço: R$ 1199,99" /> */}
