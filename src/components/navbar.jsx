import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.css'

function Index() {
    return (
        <div className="CardContainer">
        <h2>Pages</h2>
        <div className='wrapper wrapper-home'>
          <div className='inner-card-div'>
          <ul className='inline'>
            <li>
              <button>
                <Link to="/Student/">Student</Link>
              </button>
            </li>
            <li>
              <button>
              <Link to="/Campus/">Campus</Link>
              </button>
            </li>
          </ul>
          </div>
        </div>
    </div>
    );
}


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Student/">Student</Link>
            </li>
            <li>
              <Link to="/Campus/">Campus</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/Student/" component={Index} />
        <Route path="/Campus/" component={Index} />
      </div>
    </Router>
  );
}

export default AppRouter;

