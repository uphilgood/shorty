import React from 'react'


const NavigationTabs = props => (
    <div className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>

    <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" onClick={props.goHome}>Home</a>
  </li>
  <li class="nav-item">
    {props.currentClicked}
  </li>
  <li class="nav-item">
    {props.clicks}
  </li>
  {/* <li class="nav-item">
    <a class="nav-link" onClick={() => props.handlePageChange("About")}>About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={() => props.handlePageChange("Projects")}>Projects</a>
  </li> */}
</ul>
    </div>
)

export default NavigationTabs