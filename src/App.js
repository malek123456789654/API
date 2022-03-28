import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Component/Details";
import Navigation from "./Component/Navigation";
import UserList from "./Component/UserList";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<UserList></UserList>}></Route>
        <Route path="/users/details:id" element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
