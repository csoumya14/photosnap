import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './themes/globalStyles';
import GalleryData from './data/GalleryData';
import FeaturesData from './data/FeaturesData';
import PriceData from './data/PriceData';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/AccessibleNavBar';
import MainPage from './pages/Home/Home';
import StoriesPage from './pages/Stories/Stories';
import FeaturesPage from './pages/Features/Features';
import PricingPage from './pages/Price/Price';
import NavBarBigScreen from './components/BigScreenNavBar';

const App = () => {
  const [image, setImage] = useState([]);
  const [feature, setFeature] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;

  useEffect(() => {
    setImage(GalleryData);
    setFeature(FeaturesData);
    setCardInfo(PriceData);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <Router>
        <GlobalStyle />
        {width < breakpoint ? <NavBar /> : <NavBarBigScreen />}
        <ScrollToTop>
          <Switch>
            <Route path="/stories">
              <StoriesPage image={image} />
            </Route>
            <Route path="/features">
              <FeaturesPage feature={feature} />
            </Route>
            <Route path="/pricing">
              <PricingPage cardInfo={cardInfo} />
            </Route>
            <Route path="/">
              <MainPage image={image} feature={feature} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
