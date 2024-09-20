
import './App.css'
import { Firstsection } from './assets/components/Firstsection'
import { Header } from './assets/components/Header'
import Contact from './components/Contact.jsx'; 
import Grid from './components/grid.jsx';  
import MainText from './components/MainText.jsx';  
import Footer from './components/Footer.jsx';  

function App() {

  return (
    <>
      <Header />
      <Firstsection />
      <Grid/>
      <MainText />
      <div className="app-container">
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App;
