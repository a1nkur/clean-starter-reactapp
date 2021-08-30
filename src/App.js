import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <AppContainer>
      <Switch>
        <GlobalStyle />
        <Route exact path="/">

        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`

`