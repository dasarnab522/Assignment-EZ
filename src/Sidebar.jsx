import React from "react";
import "./Sidebar.css";
import SouthIcon from "@mui/icons-material/South";
import SortIcon from "@mui/icons-material/Sort";
import LocalHospitalSharpIcon from "@mui/icons-material/LocalHospitalSharp";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

function Sidebar() {
  return (
    <div className="sidemain">
      <div className="sidehead">
        <header className="sidehTop">
          <div className="ltext">
            <h1>Clients</h1>
            <SouthIcon/>
            <SortIcon/>
             <p>Creation time</p>
            </div>
            <LocalHospitalSharpIcon sx={{ width: "1.8rem", color: "aqua" }} />
        </header>
        </div>
        <div className="sideSearch">
          <div className="sidebarCont">
            <input className="search_input" placeholder="Company, Entity, User, Domain, Services, Location"/>
              <SearchIcon/>
          </div>
        </div>
      <div className="sidebody">
        <section>
          <div className="sideSub">
            <div className="sideSubTop">
              <div className="sideSubTopText">
                <p>April 2021</p>
              </div>
              <div className="sideSubTopTextIcon">
                <KeyboardArrowDownSharpIcon />
              </div>
            </div>
            <div>
              {
              Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="sideBodyText">
                    <div className="clint-title">
                    <p>Company Name</p>
                    <p>CODE</p>
                    </div>
                    <div className="clint-count">
                    <h5>8 Entities</h5>
                    <p>64 Users</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
