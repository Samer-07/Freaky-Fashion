// components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';

function Layout({ logo, lista, icons, sections }) {
  return (
    <>
      <Navbar logo={logo} lista={lista} icons={icons} />
      <Outlet /> 
      <Features />
      <Footer sections={sections} />
    </>
  );
}

export default Layout;
