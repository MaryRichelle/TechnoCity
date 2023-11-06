import { BrowserRouter as Router } from 'react-router-dom';
import { styled } from 'styled-components';
import AppRoutes from "./components/AppRoutes"
import Nav from './Nav/Nav';
import SubNav from './Nav/SubNav';

import Footer from './footer/Footer';
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
        <Footer />
      </MainApp>
    </Router>
  );
}

export default App;
