const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>É uma ótima hora para saborear um bom BURGER</h3>
        <h1>
          <span>BURGER</span> DA <br /> SEMANA
        </h1>
        <p className="details">
          Sabor incomparável em cada mordida. Peça já o seu!
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Fazer Pedido
          </a>
        </div>
      </div>
      <div className="div-header-img">
        <img src="slim.jpg" alt="" className="header-img" />
      </div>
    </div>
  )
}

export { Header }
