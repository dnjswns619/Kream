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
import WeeklyPick from './components/WeeklyPick.js';
import HoneyScoopHouse from './components/HoneyScoopHouse.js';
import NorthFace from './components/NorthFace.js';
import NylonBags from './components/NylonBags.js';
import OY from './components/OY.js';
import HotTrands from './components/HotTrands.js';
import NewLowestAsks from './components/NewLowestAsks.js';
import NewHighestBids from './components/NewHighestBids.js';
import UpcomingRelease from './components/UpcomingRelease.js';

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
            <WeeklyPick></WeeklyPick>

            <EventBanner item={eventBannerData[3]}></EventBanner>
            <HoneyScoopHouse></HoneyScoopHouse>

            <EventBanner item={eventBannerData[4]}></EventBanner>
            <NorthFace></NorthFace>

            <EventBanner item={eventBannerData[5]}></EventBanner>
            <NylonBags></NylonBags>

            <EventBanner item={eventBannerData[6]}></EventBanner>
            <OY></OY>
            <HotTrands></HotTrands>

            <EventBanner item={eventBannerData[7]}></EventBanner>
            <NewLowestAsks></NewLowestAsks>
            <NewHighestBids></NewHighestBids>

            <EventBanner item={eventBannerData[8]}></EventBanner>
            <UpcomingRelease></UpcomingRelease>
          </>
        }></Route>
      </Routes>

      
    </div>
  );
}

export default App;
