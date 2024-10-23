import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

//NavBar da página com o logo, botão do carrinho e login

const CategoryButton = ({categoryName}) => {
    <Link to={`category/${categoryName}`}>
      <button className='p-1 border-collapse'>{categoryName}</button> 
    </Link>
  }
  

function Navbar (){
  return (
    <nav className="nav-bar">
        <div className='nav'>
            <div className='logo-page'>
                <Link to={'/index.html'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL4tHGi6J4HfA2BxLTNgVSGWf5Dp3Gc92Dg&s" alt=""/></Link>
            </div>
            <div className='nav-link'>
                {/* <CategoryButton categoryName="mens"/>
                <CategoryButton categoryName="women"/>
                <CategoryButton categoryName="eletronics"/> */}
            </div>
            <div className='login-cart'>
                <a href="login.html"><button>Login</button></a> 
                <Link to='/cart'><CartWidget /></Link>
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