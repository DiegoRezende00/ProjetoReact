import React from 'react'
import CartWidget from './CartWidget';

function Navbar (){
  return (
    <nav class="nav-bar">
        <div class='nav'>
            <div class='logo-page'>
                <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL4tHGi6J4HfA2BxLTNgVSGWf5Dp3Gc92Dg&s" alt=""/></a>
            </div>
            <div class='nav-link'>
                <ul>
                    <li><a href="index.html"><button>Inicio</button></a></li>
                    <li><a href="nike.html"><button>Nike</button></a></li>
                    <li><a href="adidas.html"><button>Adidas</button></a></li>
                    <li><a href="puma.html"><button>Puma</button></a></li>
                </ul>
            </div>
            <div class='login-cart'>
                <a href="login.html"><button>Login</button></a> 
                <CartWidget />              
            </div>
         </div>
     </nav>
  );
};

export default Navbar;
