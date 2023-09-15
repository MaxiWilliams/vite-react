import './App.css'
import Brand from './components/Brand';
import Button from './components/Button';
import CategoryItem from './components/CategoryItem';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function App() {
  return <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Brand />
        <Button />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <CategoryItem isActive={true} name="Home"/>
          </li>
          <li className="nav-item">
            <CategoryItem isActive={false} name="Mis Vehiculos"/>
          </li>
          <li className="nav-item">
            <CategoryItem isActive={false} name="Contacto"/>
          </li>
          <li className="nav-item">
            <CategoryItem isActive={false} name="Soporte"/>
          </li>
        </ul> 
      </div>
      <AiOutlineShoppingCart size={40} /><div>3</div>
   </div>
  </nav>
</div>;
}

export default App
