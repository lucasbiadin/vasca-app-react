import {Cart} from 'grommet-icons';

function CartWidget(){
   return(
      <div>
         <a className='carrito-fondo' href='.'>
            <Cart className='carrito' size='medium'/>
         </a>
      </div>
   )
}

export default CartWidget;

