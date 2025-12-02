import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./Navbar";
import Product from './Product';
import Categories from './Categories';
import Collection from './Collection';
import Bestsellers from './Bestsellers';
import Lastsection from './Lastsection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Product/>
    <Categories />
    <Collection/>
    <Bestsellers/>
    <Lastsection/>
  </StrictMode>,
)
