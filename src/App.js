import './App.css';
import "./assets/styles/style.scss"
import Header from './components/Header.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import HomeView from './pages/HomeView.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <HomeView />
        }></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
