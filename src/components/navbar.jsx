import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/navbar.css";
import Home from "./Home";
import Students from "./Students";
import CampusListing from "./CampusListing";
import axios from "axios";
import ViewCampus from './ViewCampus';

// function Index() {
//   return (
//     <div className="CardContainer">
//       <h2>Pages</h2>
//       <div className="wrapper wrapper-home">
//         <div className="inner-card-div">
//           <ul className="inline">
//             <li>
//               <button>
//                 <Link to="/Student/">Student</Link>
//               </button>
//             </li>
//             <li>
//               <button>
//                 <Link to="/Campus/">Campus</Link>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

function AppRouter() {

  // axios.post("https://campus-cms.herokuapp.com/api/campuses/create", {
  //     name: "Baruch College",
  //     address: "55 Lexington Ave, New York, NY 10010",
  //     description: "This is Baruch College",
  //     imageUrl: "https://www.baruch.cuny.edu/pressroom/images/pressroom-landing.png"
  //   }).then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // axios.post("https://campus-cms.herokuapp.com/api/campuses/update"

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Student/">Student</Link>
            </li>
            <li>
              <Link to="/Campus/">Campus</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/Student/" component={Students} />
        <Route exact path="/Campus/" component={CampusListing} />
        <Route exact path="/viewcampus/:id" component={ViewCampus} />
      </div>
    </Router>
  );
}

export default AppRouter;
