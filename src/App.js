import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { SchlerotiniaRiskCal } from "./Components/SchlerotiniaRiskCal";
import { DiseaseServerity } from "./Components/DiseaseServerity";
import { EconomicCalculator } from "./Components/EconomicCalculator";
import { SclerotiniaRating } from "./Components/SclerotiniaRating";
import { YoutubeVideo } from "./Components/YoutubeVideo";
import {PhotoGallery}   from "./Components/PhotoGallery";


import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Menu}></Route>
          
          <Route
            exact
            path="/sclerotinia-risk-calculator"
            component={SchlerotiniaRiskCal}
          ></Route>
          <Route
            exact
            path="/economic-calculator"
            component={EconomicCalculator}
          ></Route>
          <Route
            exact
            path="/disease-serverity-workbook"
            component={DiseaseServerity}
          ></Route>
          <Route
            exact
            path="/sclerotinia-rating-scale"
            component={SclerotiniaRating}
          ></Route>
          <Route exact path="/youtube-video" component={YoutubeVideo}></Route>
          <Route exact path="/photo-gallery" component={PhotoGallery}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
