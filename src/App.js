import React from "react"
import './styles.css'
import {Link, Switch, Route} from 'react-router-dom'
import Home from "./Home"
import Products from "./Products"
import Hotdog from './components/hotdog'

function App() {    
    return (
        <div>
            
                <ul className='nav'>
                    <li><Link to='/port/'>Home</Link></li>
                    <li><Link to='/port/products'>Products</Link></li>
                    <li><Link to='/port/hotdog'>Hot Dog or Sandwich?</Link></li>

                </ul>
            
            
            <Switch>
                <Route exact path='/port'>
                    <Home />
                </Route>
                <Route path='/port/products'>
                    <Products />
                </Route>
                <Route path='/port/hotdog'>
                    <Hotdog />
                </Route>
            </Switch>
            
        </div>
    )
}

export default App



// import logo from './logo.svg';
// import './App.css';

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

// export default App;
