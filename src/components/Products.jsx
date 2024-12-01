import { Productbox } from "./Productbox"

const Products = () => {
  return (
    <div id="products">
      <h1>ESCOLHA E APRECIE</h1>
      <p>Carne suculenta, queijo derretido e muito mais. Experimente agora!</p>
      <div className="a-container">
        <Productbox image={"duo.jpg"} title="Duo Burger" />
        <Productbox image={"master.jpg"} title="Master Burger" />
        <Productbox image={"monster.jpg"} title="Monster Burger" />
      </div>
    </div>
  )
}

export { Products }
