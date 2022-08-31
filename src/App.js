import { ImageListItem } from '@mui/material';
import './App.css';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
// import Productos from "./utils/Productos"


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <ImageListItem/>
    </div>
  );
}

export default App;
