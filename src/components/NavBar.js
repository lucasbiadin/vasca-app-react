import '../App.css';
import VascaLogo from '../vasca-logo.png';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function NavBar() {
   return (
      <div>
         <header className="navBar">
            <h1 className='logo'>
               <a href='.'>
                  <img className='vasca-logo' alt='Vasca & Co' src={VascaLogo}></img>
               </a>
            </h1>
            <ItemListContainer/>

            <CartWidget/>


         </header>
      </div>
   )
}

export default NavBar;