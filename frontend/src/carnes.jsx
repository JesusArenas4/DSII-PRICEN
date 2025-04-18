import React from 'react';
import './carnes.css';
import logo from './assets/logos/logo.png';
import homeIcon from './assets/logos/home icon.svg';
import userIcon from './assets/logos/user icon.svg';
import notesIcon from './assets/logos/list icon.svg';
import featuredProductImage from './assets/carnes/carnesBanner.png';
import cheapProductImage from './assets/carnes/lomocerdo.png';
import product1 from './assets/carnes/producto1.png';
import product2 from './assets/carnes/producto2.jpg';
import product3 from './assets/carnes/producto3.png';
import product4 from './assets/carnes/producto4.png';

function Carnes() {
  const handleHomeClick = () => {
    // Redirigir al home (usar react-router)
    window.location.href = '/';
  };

  const handleNotesClick = () => {
    alert('Desplegando notas...');
  };

  const handleLoginClick = () => {
    alert('Redirigiendo al login...');
  };

  return (
    <div className="meat-page">
      {/* Header con logo y botones */}
      <header className="meat-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="header-buttons">
          <button onClick={handleHomeClick} className="header-button">
            <img src={homeIcon} alt="Home" />
            <span>Home</span>
          </button>
          <button onClick={handleNotesClick} className="header-button">
            <img src={notesIcon} alt="Notas" />
          </button>
          <button onClick={handleLoginClick} className="header-button">
            <img src={userIcon} alt="Perfil" />
          </button>
        </div>
      </header>

      {/* Hero Section con imagen de fondo */}
      <section className="hero-section-carnes">
        <div className="hero-content">
          <h1 className="hero-title">Carnes</h1>
          <h2 className="hero-subtitle">Calidad en cada corte</h2>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Buscar cortes de carne..." 
              className="search-input"
            />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Producto destacado */}
      <section className="featured-product">
        <div className="product-info">
          <h2>Producto más visto</h2>
          <p className="product-description">Lomo fino de res premium, madurado por 21 días para máximo sabor y terneza.</p>
          <button className="action-button">Anotar</button>
        </div>
        <div className="product-image-container">
          <img src={featuredProductImage} alt="Producto destacado" className="product-image" />
        </div>
        <div className="product-price">
          <span className="price">$32,000</span>
          <span className="store">Éxito</span>
        </div>
      </section>

      {/* Producto más económico */}
      <section className="cheap-product">
        <div className="product-image-container">
          <img src={cheapProductImage} alt="Producto económico" className="product-image" />
        </div>
        <div className="product-info">
          <h2>Producto más económico</h2>
          <p className="product-description">Lomo de cerdo, ideal para asar o guisar, con un precio inigualable.</p>
          <button className="action-button">Anotar</button>
        </div>
        <div className="product-price">
          <span className="price">$24,500</span>
          <span className="store">D1</span>
        </div>
      </section>

      {/* Lista de productos */}
      <section className="products-section">
        <h2 className="section-title">Nuestros productos</h2>
        <div className="products-grid">
          {/* Producto 1 */}
          <div className="product-card">
            <img src={product1} alt="Carne de res" className="product-image" />
            <h3 className="product-name">Lomo fino</h3>
            <div className="product-meta">
              <span className="product-price">$31,500</span>
              <span className="product-store">Carulla</span>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="product-card">
            <img src={product2} alt="Carne de cerdo" className="product-image" />
            <h3 className="product-name">Chuleta de cerdo</h3>
            <div className="product-meta">
              <span className="product-price">$18,900</span>
              <span className="product-store">Jumbo</span>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="product-card">
            <img src={product3} alt="Pollo" className="product-image" />
            <h3 className="product-name">Pechuga de pollo</h3>
            <div className="product-meta">
              <span className="product-price">$12,300</span>
              <span className="product-store">Olimpica</span>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="product-card">
            <img src={product4} alt="Carne molida" className="product-image" />
            <h3 className="product-name">Carne molida</h3>
            <div className="product-meta">
              <span className="product-price">$21,700</span>
              <span className="product-store">Exito</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carnes;