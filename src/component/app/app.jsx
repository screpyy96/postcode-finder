import React from "react";

import Home from "../home";
import Postcode from "../postcode/postcode";
import { StyledRouter } from "./app.style";

const App = () => {
  return (
    <StyledRouter>
      <Home path="/" />
      <Postcode path="/find/:postcode/" />
    </StyledRouter>
  );
};

export default App;
