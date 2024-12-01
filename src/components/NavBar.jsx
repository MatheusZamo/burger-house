import { useState } from "react"

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 50 ? setNav(true) : setNav(false)
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="logo">
        <img src="logo1.png" alt="logo do site" />
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="main">Inicio</a>
        </li>
        <li>
          <a href="product">Produtos</a>
        </li>
        <li>
          <a href="about">Sobre</a>
        </li>
        <li>
          <a href="contact">Contato</a>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
