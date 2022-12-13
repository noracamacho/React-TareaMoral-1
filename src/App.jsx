import './App.css'
import Header from './components/Header'
import About from './components/About'
import Hobbies from './components/Hobbies'
import FreeTime from './components/FreeTime'
import Food from './components/Food'
import Technologies from './components/Technologies'

function App() { 
 
  return (
        <div className="App">
          <div className="containerCover">
            <Header />
            <div className="cardContainer">
              <About />
              <Hobbies />
              <FreeTime />
              <Food />
              <Technologies />
            </div>
          </div>
        </div>
    )

}

export default App

// Eventos
// onClick
// OnChange
// onblur
