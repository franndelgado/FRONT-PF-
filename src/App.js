import {Switch, Route} from "react-router-dom";
import Inicio from "./Components/Inicio";
import Home from "./Components/Home";
import CreateProduct from "./Components/CreateProduct/CreateProduct";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Inicio}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route path="/createProduct" component={CreateProduct}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
