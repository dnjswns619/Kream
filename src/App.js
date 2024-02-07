import './App.css';
import Header from './components/Header.js';
import SwiperSlider from './components/SwiperSlider.js';
import EventDetailLink from './components/EventDetailLink.js';
import JustDropped from './components/JustDropped.js';
import TopBrandLink from './components/TopBrand.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <SwiperSlider></SwiperSlider>
      <EventDetailLink></EventDetailLink>
      <JustDropped></JustDropped>
      <TopBrandLink></TopBrandLink>
    </div>
  );
}

export default App;
