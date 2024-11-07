import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

//NavBar da página com o logo, botão do carrinho e login

// const CategoryButton = ({categoryName}) => {
//     <Link to={`category/${categoryName}`}>
//       <button className='p-1 border-collapse'>{categoryName}</button> 
//     </Link>
//   }
  

function Navbar (){
  return (
    <nav className="nav-bar">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between"> 
                <div className='logo-page'>
                    <Link to={'/index.html'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL4tHGi6J4HfA2BxLTNgVSGWf5Dp3Gc92Dg&s" alt=""/></Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                    <div className='items_category'>
                        <Link to="/">Página principal</Link>
                        <Link to="/category/eletronics">Eletrônicos</Link>
                        <Link to="/category/mens">Masculino</Link>
                        <Link to="/category/women">Feminino</Link>
                    </div>
                </div>
                <div className='login-cart'>
                    <Link to='/login'> <button>Login</button></Link>
                    <Link to='/cart'><CartWidget /></Link>
                </div>
            </div>
        </div>
    </nav>
    
  );
};

export default Navbar;

// <li id='main-page' key='main-page'><a href="index.html"><button>Inicio</button></a></li>
// <li id='nike-page' key='nike-page'><a href="nike.html"><button>Nike</button></a></li>
// <li id='adidas-page' key='adidas-page'><a href="adidas.html"><button>Adidas</button></a></li>
// <li id='puma-page' key='puma-page'><a href="puma.html"><button>Puma</button></a></li>

// const navItems = [
//     { id: 'main-page', label: 'Inicio', link: '/index.html' },
//     { id: 'categoria1-page', label: 'Masculino', link: '/masculino.html' },
//     { id: 'categoria2-page', label: 'Feminino', link: '/feminino.html' },
//     { id: 'categoria3-page', label: 'Eletronicos', link: '/eletronicos.html' },
// ];


{/* <ul>
    {navItems.map(item => (
            <li key={item.id} id={item.id}>
                <a href={item.link}><button>{item.label}</button></a>
            </li>
        ))}
</ul> */}