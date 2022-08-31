import {Switch, Route} from "react-router-dom";
import Inicio from "./Components/Inicio";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Inicio}></Route>
      <Route exact path="/home" component={Home}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
