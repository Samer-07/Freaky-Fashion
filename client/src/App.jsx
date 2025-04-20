import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from './components/Hero/Hero';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import Products from './components/Products/Products';
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SearchResults from "./components/SearchResults/SearchResults";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProduct";
import Layout from './components/Layout/Layout';

function App() {
  const lista = [
    { name: 'Nyheter', link: '#' },
    { name: 'Topplistan', link: '#' },
    { name: 'Rea', link: '#' },
    { name: 'Kampanjer', link: '#' },
  ];

  const icons = [
    { icon: faShoppingCart, link: '#' },
    { icon: faHeart, link: '#' },
  ];

  const img = [
    { id: 1, src: "/images/2.avif" },
  ];

  const imge = [
    { id: 2, src: "/images/4.jpg" },
    { id: 3, src: "/images/4.jpg" },
    { id: 4, src: "/images/4.jpg" }
  ];

  const title = " Lorem ipsum  dolor";
  const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ullam hic aut illo nobis aliquid eum beatae sunt error corporis eius laborum, nesciunt nostrum in velit cum rem quas maiores!";
  const sectionTitle = "Lorem ipsum  dolor";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/Products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const sections = [
    { title: "Shopping", links: ["Vinterjackor", "Pufferjackor", "Kappa", "Trenchcoats"] },
    { title: "Mina Sidor", links: ["Mina Ordrar", "Mitt Konto"] },
    { title: "Kundtjänst", links: ["Returnpolicy", "Integritetspolicy"] },
  ];

  return (
    <Router>
      <Routes>

        <Route element={<Layout logo="/images/9.png" lista={lista} icons={icons} sections={sections} />}>
          <Route path="/" element={
            <>
              <Hero img={img} imge={imge} title={title} text={text} sectionTitle={sectionTitle} />
              <Products images={products} />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>

        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/new" element={<AddProduct />} />

      </Routes>
    </Router>
  );
}

export default App;
