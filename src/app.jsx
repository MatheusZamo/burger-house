import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { About } from "./components/About"
import { Contact } from "./components/Contact"

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Products />
      <About />
      <Contact />
    </>
  )
}

export { App }
