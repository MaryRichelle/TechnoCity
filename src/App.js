import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./components/AppRoutes"
import Nav from './components/Nav/Nav';

import Footer from './components/footer/Footer';
import SubNav from './components/Nav/SubNav';
import { styled } from 'styled-components';
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
        <AppRoutes/>
        <Footer />

      </MainApp>
    </Router>
  );
}

export default App;
