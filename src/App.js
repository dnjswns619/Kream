import './App.css';
import Header from './pages/Header.js';
import SwiperSlider from './components/SwiperSlider.js';
import EventDetailLink from './components/EventDetailLink.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <SwiperSlider></SwiperSlider>
      <EventDetailLink></EventDetailLink>
    </div>
  );
}

export default App;
