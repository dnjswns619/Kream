import './App.css';
import Header from './components/Header.js';
import SwiperSlider from './components/SwiperSlider.js';
import EventDetailLink from './components/EventDetailLink.js';
import JustDropped from './components/JustDropped.js';
import TopBrandLink from './components/TopBrand.js';
import EventBanner from './components/EventBanner.js';
import eventBannerData from './eventBannerData.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <SwiperSlider></SwiperSlider>

      <EventDetailLink></EventDetailLink>
      
      <JustDropped></JustDropped>
      <TopBrandLink></TopBrandLink>

      <EventBanner item={eventBannerData[0]}></EventBanner>
    </div>
  );
}

export default App;
