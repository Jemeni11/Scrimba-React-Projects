import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import './style.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map(datum => {
          return(
            <Card
              key={datum.id}
              item={datum}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
