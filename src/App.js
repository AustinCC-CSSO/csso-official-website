import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages";

function App() {
  return (
    // <Router>
    //   {/* <Navbar /> */}
    //   <Switch>
    //     <Route path="/" component={Home} exact />
    //     <Route Path="/signin" component={SigninPage} exact />
    //   </Switch>
    // </Router>
    <Router>
      <Home />
    </Router>
  );
}

export default App;
