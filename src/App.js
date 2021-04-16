import {BrowserRouter as Router , Switch} from 'react-router-dom'
import { RouteWithSubRoutes , routes } from './utils/routes'
import Context from './context/Context'
import Navbar from './components/Navbar';
import Aside from './components/Aside';
function App() {
  
  return (
    <Context>
    <Router>
      <Navbar />
      <Aside />
                <Switch>
                    {
                      routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                      ))
                    }
                </Switch>
    </Router>
    </Context>
  );
}

export default App;
