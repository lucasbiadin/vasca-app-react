import '../App.css';
import VascaLogo from '../vasca-logo.png';
import CartWidget from './CartWidget';
// import ItemListContainer from './ItemListContainer';

function NavBar() {
   return (
      <div>
         <header className="navBar">
            <h1 className='logo'>
               <a href='.'>
                  <img className='vasca-logo' alt='Vasca & Co' src={VascaLogo}></img>
               </a>
            </h1>
            <div className="menu-container">
               <ul className='menu'>
                  <li className='menu-li'><a className='menu-enlace' href='.'>Home</a></li>
                  <li className='menu-li'><a className='menu-enlace' href='.'>Productos</a></li>
                  <li className='menu-li'><a className='menu-enlace' href='.'>Nosotros</a></li>
               </ul>
            </div>
            <CartWidget />
         </header>
      </div>
   )
}

export default NavBar;