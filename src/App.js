import './App.css';
import Header from './components/Header.js';
import SwiperSlider from './components/SwiperSlider.js';
import EventDetailLink from './components/EventDetailLink.js';
import JustDropped from './components/JustDropped.js';
import TopBrandLink from './components/TopBrand.js';
import EventBanner from './components/EventBanner.js';
import eventBannerData from './eventBannerData.js';
import MostPopular from './components/MostPopular.js';
import Coordination from './components/Coordination.js';
import { Route, Routes } from 'react-router-dom';
import NewIn from './components/NewIn.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <>
            <SwiperSlider></SwiperSlider>

            <EventDetailLink></EventDetailLink>

            <JustDropped></JustDropped>
            <TopBrandLink></TopBrandLink>

            <EventBanner item={eventBannerData[0]}></EventBanner>
            <MostPopular></MostPopular>
            <Coordination></Coordination>

            <EventBanner item={eventBannerData[1]}></EventBanner>
            <NewIn></NewIn>

            <EventBanner item={eventBannerData[2]}></EventBanner>

            <EventBanner item={eventBannerData[3]}></EventBanner>

            <EventBanner item={eventBannerData[4]}></EventBanner>

            <EventBanner item={eventBannerData[5]}></EventBanner>

            <EventBanner item={eventBannerData[6]}></EventBanner>

            <EventBanner item={eventBannerData[7]}></EventBanner>

            <EventBanner item={eventBannerData[8]}></EventBanner>
          </>
        }></Route>
      </Routes>

      
    </div>
  );
}

export default App;
