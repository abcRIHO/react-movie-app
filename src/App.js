import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './routes/Detail';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* 한 번에 하나의 Route만 렌더링하기 위해 Switch */}
        <Route path="/movie/:id">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
