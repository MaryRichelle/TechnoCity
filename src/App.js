import { BrowserRouter as Router } from 'react-router-dom';
import { styled } from 'styled-components';
import AppRoutes from "./components/AppRoutes"
import Nav from './components/Nav/Nav';
import SubNav from './components/Nav/SubNav';
import Categories from './components/Categories';
import BottomCarousel from "./components/BottomCarousel"
import Footer from './components/footer/Footer';
const MainApp = styled.main`
display:flex;
flex-direction: column;
justify-content:space-around;
`
function App() {


  return (

    <Router>
      <MainApp>
        <Nav />
        <SubNav />
        <AppRoutes />
        <BottomCarousel />
        <Categories />
        <Footer />
      </MainApp>
    </Router>
  );
}

export default App;
