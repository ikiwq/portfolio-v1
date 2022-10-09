import NavBar from "./components/NavBar";
import Home from './components/Home'
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";
import Logo from '../src/assets/images/logo.png'
function App() {
  return (
  <div>
    <Helmet>
      <title>Ikiwq</title>
      <meta name="description" content="My Portfolio" />
      <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
    </Helmet>
    <NavBar/>
    <Home />
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
  </div>
  );
}

export default App;
