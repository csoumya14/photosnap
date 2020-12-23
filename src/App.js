import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './Themes/globalStyles';
import GalleryData from './Components/GalleryData';
import FeaturesData from './Components/FeaturesData';
import PriceData from './Components/PriceData';
import NavBar from './Components/NavigationBar';
import MainPage from './Components/Home/MainPage';
import StoriesPage from './Components/Stories/StoriesPage';
import FeaturesPage from './Components/Features/FeaturesPage';
import PricingPage from './Components/Price/PricingPage';
import NavBarBigScreen from './Components/BigScreenNavBar';

const App = () => {
  const [image, setImage] = useState([]);
  const [feature, setFeature] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

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
        {width < breakpoint ? (
          <NavBar isOpen={isOpen} toggleNav={toggleNav} />
        ) : (
          <NavBarBigScreen />
        )}

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
      </Router>
    </div>
  );
};

export default App;
