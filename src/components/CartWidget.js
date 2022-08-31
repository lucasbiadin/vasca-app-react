import {Cart} from 'grommet-icons';

function CartWidget(){
   return(
      <div>

            <button className='cart-button'>
               <a className='carrito' href='.'><Cart  size='medium'/></a>
            </button>


      </div>
   )
}

export default CartWidget;

