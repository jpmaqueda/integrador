import React from "react";
import JordanWalke from "../../assets/images/jordan-walke.png";

function TopBar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="">
            <i className="fa-solid fa-bars"></i>
        </button>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

            {/* <!-- Nav Item - Alerts --> */}
            

            {/* <!-- Nav Item - Messages --> */}
            

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
                    <img className="img-profile rounded-circle" src={JordanWalke} alt="Jordan Walke - Creador de React" width="60" />
                </a>
            </li>

        </ul>

    </nav>
    )
}

export default TopBar;