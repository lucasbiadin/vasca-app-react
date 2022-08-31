import ItemCount from "./ItemCount";
import Productos from "../utils/Productos";

function ItemListContainer() {

   const onAdd = (cantidad) => {
      alert(`seleccionaste ${cantidad} productos`)
   }
   return (
      <>
         {
            Productos.map(item => (
               <ItemCount
                  nombre={item.nombre}
                  alt={item.alt}
                  desc={item.desc}
                  img={item.image}

                  stock={5} initial={1} onAdd={onAdd}
               />
            ))
         }
      </>
   )
}
export default ItemListContainer;
