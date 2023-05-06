import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

import BreweryList from "./BreweryList";
import BreweryDetails from "./BreweryDetails";
import PageNotFound from "./PageNotFound";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1 className="title">For Brewery Lovers</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/breweries">Breweries</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3> Footer here</h3>
      </footer>
    </div>

    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/breweries">Breweries</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/breweries/:id" element={<BreweryDetails />} />
    //     <Route path="/breweries" element={<BreweryList />} />
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </Router>
  );
};

export default HomePage;
