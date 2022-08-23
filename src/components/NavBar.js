import '../App.css';
import VascaLogo from '../vasca-logo.png';
import {Cart} from 'grommet-icons';




function NavBar() {
   return (
      <div>
         <header className="navBar">
            <h1 className='logo'>
               <a href='.'>
                  <img className='vasca-logo' alt='Vasca & Co' src={VascaLogo}></img>
               </a>
            </h1>
            <ul className='menu'>
               <li className='menu-li'><a className='menu-enlace' href='.'>Home</a></li>
               <li className='menu-li'><a className='menu-enlace' href='.'>Productos</a></li>
               <li className='menu-li'><a className='menu-enlace' href='.'>Nosotros</a></li>
            </ul>
           <a className='carrito-fondo' href='.'><Cart className='carrito' size='medium'/></a>

         </header>
      </div>
   )
}

export default NavBar;