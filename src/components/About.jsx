const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>QUEM SOMOS</h1>
        <p>
          No Burger House, acreditamos que um bom hambúrguer é mais do que
          apenas carne entre dois pães. É uma experiência completa, desde a
          seleção dos ingredientes mais frescos até a atmosfera aconchegante do
          nosso restaurante. Combinamos receitas clássicas com toques modernos,
          criando sabores únicos que vão te surpreender a cada mordida. Venha
          saborear o melhor hambúrguer da cidade e faça parte da nossa história!
        </p>
        <button>Sobre Nós</button>
      </div>
      <div className="about-image">
        <img src="about.png" alt="burger" />
      </div>
    </div>
  )
}

export { About }
