import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import Checker from './Components/Checker'
function App() {

  return (
    <>
      {/* <HashRouter>
        <div style={{ textAlign: 'center' }}>
          <h1>My App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
            <Link to="/contact">Contact</Link>
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </HashRouter> */}
      <Checker />
    </>
  )
}

export default App
