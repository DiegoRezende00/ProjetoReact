import React from 'react'

const Navbar = () => {
  return (
     <nav class="nav-bar">
        <div class='nav'>
            <div class='logo-page'>
                <h1><img src="" alt=""/><a href="index.html">Loja de calçados</a></h1>
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

                <a href="carrinho.html"><button>Carrinho</button></a>
            </div>
         </div>
     </nav>
  );
};

export default Navbar;
