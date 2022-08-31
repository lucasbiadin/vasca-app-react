import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {

   // Suma y resta de productos en el carrito
   const [count, setCount] = useState(0);

   useEffect(() => {
      setCount(initial);
   },[]);

   const sumarProductos = () => {
      if (count < stock) {
         setCount(count +1)
      } 

   }
   const restarProductos = () => {
      if (count > initial) {
         setCount(count - 1)
      }
   }

   // // CARDS
   return (
      <div className='card'>

         <button onClick={sumarProductos} size="large">+</button>
         <em>{count}</em>
         <button onClick={restarProductos} size="large">-</button>
         <button onClick={() => onAdd(count)}>Agregar al carrito</button>

      </div>
   );
}