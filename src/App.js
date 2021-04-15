import {BrowserRouter as Router , Switch} from 'react-router-dom'
import { RouteWithSubRoutes , routes } from './utils/routes'
import Header from './components/Header';
import Context from './context/Context'
function App() {
  
  return (
    <Context>
    <Router>
      <Header />
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
