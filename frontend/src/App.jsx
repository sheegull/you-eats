import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextApi } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
        <div className="flex">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="" element={<SearchResult />}></Route>
            <Route path="" element={<VideoDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
