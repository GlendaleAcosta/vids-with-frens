import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Navbar extends React.Component {
  render(){
    console.log("RENDER: NAV");
    return (
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">Vids-With-Frens</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <IndexLink className="nav-link" href="/">Home <span className="sr-only">(current)</span></IndexLink>
              </li>
            </ul>
          </div>        
      </nav>

    )
  }
}