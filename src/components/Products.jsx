import { Productbox } from "./Productbox"

const Products = () => {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime
        veniam voluptate, quis mostrum aliquid!
      </p>
      <div className="a-container">
        <Productbox image={"s1.png"} title="Luger Burger" />
        <Productbox image={"s2.png"} title="Le Pigeon Burger" />
        <Productbox image={"s1.png"} title="Luger Burger" />
      </div>
    </div>
  )
}

export { Products }
