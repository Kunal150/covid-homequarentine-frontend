import React from "react";
import Header from
 "./Header";
import './App.css';
import Home from './Home';
import Feature from './Feature';
import { BrowserRouter as Router, Switch,Route }
from "react-router-dom";
import Lungs from "./Lungs";
import Medical from "./Medical"
import Recommended from "./Recommended";
import Lunch from "./Lunch";
import User from "./User";
import Thing from "./Thing";
import Best from "./Best";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
    <div className="App">
    <Header /> 
      <Switch>
      <Route path="/Best">
   <Best/>
    
  </Route>
      <Route path="/Thing">
   <Thing/>
    
  </Route>
      <Route path="/User">
   <User/>
    
  </Route>
      <Route path="/Lunch">
   <Lunch/>
    
  </Route>
      <Route path="/Recommended">
   <Recommended/>
    
  </Route> 
      <Route path="/Medical">
   <Medical/>
    
  </Route>
  <Route path="/Lungs">
    <Lungs/>
    
  </Route>
 
  <Route path="/">
 
 <Home/>
    
    </Route>
   
  </Switch>
    </div>
    </Router>
  );
}

export default App;
