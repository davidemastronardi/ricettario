import { useEffect, useState } from "react";
import "./App.css";
import Ricette from "./components/Ricette";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import AddRecipe from "./pages/AddRecipe";
import Home from "./pages/Home";
import EditRecipe from "./pages/EditRecipe";

function App() {


  return (
    <div className="App ">
      <Router>
       
        <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<AddRecipe />} path="/addRecipe"></Route>
        <Route element={<EditRecipe />} path="/editRecipe/:id"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
