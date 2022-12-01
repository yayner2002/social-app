import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userID/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
