import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logos/logo.png';
import userIcon from './assets/logos/user icon.svg';
import notesIcon from './assets/logos/list icon.svg';
import searchIcon from './assets/logos/search.png';
import banner from './assets/home/banner-img.png';
import brilla from './assets/home/brilla.png';
import brilla2 from './assets/home/brilla2.png';
import cerveza1 from './assets/home/cerveza bahia.png';
import cerveza2 from './assets/home/cerveza2.png';
import cerveza3 from './assets/home/cerveza3.png';
import chocolatina from './assets/home/chocolatina.png';
import lomo from './assets/carnes/lomocerdo.png';
import d1logo from './assets/logos/d1logo.png';
import aralogo from './assets/logos/aralogo.png';
import exitologo from './assets/logos/exitologo.png';
import { useNavigate } from 'react-router-dom';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para controlar la visibilidad del sidebar de categorías
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const products = [
    { id: 1, image: brilla, name: 'Detergente Brilla' },
    { id: 2, image: cerveza1, name: 'Cerveza Bahia' },
    { id: 3, image: cerveza2, name: 'Cerveza Club Colombia' },
    { id: 4, image: cerveza3, name: 'Cerveza Poker' },
    { id: 5, image: chocolatina, name: 'Chocolatina Jumbo' },
    { id: 6, image: lomo, name: 'Lomo de cerdo' },
    { id: 7, image: brilla2, name: 'Detergente Brilla' },
    { id: 8, image: cerveza3, name: 'Cerveza SI' },
  ];

  // Truco para efecto infinito en el carrusel
  const duplicateProducts = [...products, ...products, ...products];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicateProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicateProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      setTimeout(() => {
        setCurrentIndex(products.length);
      }, 0);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setCurrentIndex(products.length);
      }, 0);
    }
  }, [currentIndex, products.length]);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleNotesClick = () => {
    alert('Desplegando notas...');
  };

  // Abre o cierra el sidebar (al hacer click en el menú hamburguesa)
  const handleCategoriasClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Función para redireccionar y cerrar el sidebar cuando se selecciona una categoría
  const handleCategorySelect = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // Nueva función para redireccionar directamente a la página de categorías
  const handleStartBuying = () => {
    navigate('/categorias'); // Ajusta la ruta según corresponda
  };

  return (
    <>
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="navbar-left">
          {/* Botón menú hamburguesa */}
          <button className="menu-button" onClick={handleCategoriasClick}>
            <span className="hamburger-icon"></span>
          </button>
          {/* Logo a la derecha del botón */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="¿Qué producto estás buscando?" />
          <button className="search-button">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </div>

        {/* Botones a la derecha */}
        <div className="buttons">
          <button onClick={handleLoginClick} className="icon-button">
            <img src={userIcon} alt="Login" />
          </button>
          <button onClick={handleNotesClick} className="icon-button">
            <img src={notesIcon} alt="Notas" />
          </button>
        </div>
      </div>

      {/* Sidebar de Categorías */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={handleCategoriasClick}>
          &times;
        </button>
        <h3>Categorías</h3>
        <ul>
          <li onClick={() => handleCategorySelect('/frutasVerduras')}>Verduras</li>
          <li onClick={() => handleCategorySelect('/carnes')}>Carnes</li>
          <li onClick={() => handleCategorySelect('/aseo')}>Aseo</li>
          <li onClick={() => handleCategorySelect('/alcohol')}>Alcohol</li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Banner */}
        <div className="banner">
          <div className="banner-text">
            <h1>Compara, ahorra y elige: ¡Todo en un solo lugar!</h1>
            <p>
              Encuentra las mejores ofertas en aseo, alimentos y tecnología, siempre al
              mejor precio!
            </p>
            <button onClick={handleStartBuying} className="banner-button">
              ¡Empezar a comprar!
            </button>
          </div>
          <div className="banner-img">
            <img src={banner} alt="Banner" />
          </div>
        </div>

        {/* Productos */}
        <div className="productos-buscados">
          <h2>¡Productos más buscados!</h2>
          <div className="carrusel">
            <button className="prev" onClick={handlePrev}>
              &#10094;
            </button>
            <div className="carrusel-img">
              {duplicateProducts
                .slice(currentIndex, currentIndex + 3)
                .map((product, index) => (
                  <div key={`${product.id}-${index}`} className="carrusel-item">
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </div>
                ))}
            </div>
            <button className="next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>

        {/* Supermercados */}
        <div className="supermercados-comparados">
          <h2>Supermercados comparados</h2>
          <div className="linea-decorativa"></div>
          <div className="supermercados-lista">
            <div className="supermercado">
              <img src={d1logo} alt="D1" />
              <p>D1</p>
            </div>
            <div className="supermercado">
              <img src={aralogo} alt="ARA" />
              <p>ARA</p>
            </div>
            <div className="supermercado">
              <img src={exitologo} alt="Éxito" />
              <p>Éxito</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <p>Pricen</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="/about">¿Quiénes somos?</a>
                </li>
                <li>
                  <a href="/mission">Acerca de</a>
                </li>
                <li>
                  <a href="/team">Nuestro equipo</a>
                </li>
                <li>
                  <a href="/contact">Contáctanos</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/services">¿Qué hacemos?</a>
                </li>
                <li>
                  <a href="/products">Productos</a>
                </li>
                <li>
                  <a href="/offers">Ofertas</a>
                </li>
                <li>
                  <a href="/brands">Marcas</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Servicios</h3>
              <ul>
                <li>
                  <a href="/privacy">Privacidad</a>
                </li>
                <li>
                  <a href="/terms">Términos y condiciones</a>
                </li>
                <li>
                  <a href="/cookies">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
