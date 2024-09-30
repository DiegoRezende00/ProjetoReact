import React from 'react'
import CartWidget from './CartWidget';


const navItems = [
    { id: 'main-page', label: 'Inicio', link: 'index.html' },
    { id: 'nike-page', label: 'Nike', link: 'nike.html' },
    { id: 'adidas-page', label: 'Adidas', link: 'adidas.html' },
    { id: 'puma-page', label: 'Puma', link: 'puma.html' },
];

function Navbar (){
  return (
    <nav className="nav-bar">
        <div className='nav'>
            <div className='logo-page'>
                <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL4tHGi6J4HfA2BxLTNgVSGWf5Dp3Gc92Dg&s" alt=""/></a>
            </div>
            <div className='nav-link'>
                <ul>
                  {navItems.map(item => (
                            <li key={item.id} id={item.id}>
                                <a href={item.link}><button>{item.label}</button></a>
                            </li>
                        ))}
                </ul>
            </div>
            <div className='login-cart'>
                <a href="login.html"><button>Login</button></a> 
                <CartWidget />
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
