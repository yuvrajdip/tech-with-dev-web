import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import Technology from "./Components/Technology"



function App() {

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-950 via-purple-900 to-rose-400 opacity-80" />

        <div className="relative">

          React assignment 1
          <NavBar></NavBar>
          <Hero></Hero>
          <Technology></Technology>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
