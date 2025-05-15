import UIkit from "uikit";
import "./../stylesheet/Navbar.css"
import { useEffect } from 'react';
function Navbar(){
    useEffect(() => {
        UIkit.update();
    },[]);
    return (
        <nav className="uk-navbar-container uk-margin-medium-top">
            <div className="uk-container">
                <div uk-navbar="true">

                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <a className="uk-navbar-item uk-logo uk-margin-medium-right" href="/">Kyowa Kirin <p className="hub">HUB</p></a>
                            <div className="uk-navbar-nav uk-visible@m">
                                <li className=""><a href="/">Therapy Areas</a></li>
                                <li className=""><a href="/">Our Products</a></li>
                            </div>
                        </ul>
                    </div>

                    <div className="uk-navbar-right">
                        <div className="uk-navbar-item uk-visible@m">
                            <form className="uk-search uk-search-navbar">
                                <input className="uk-search-input" type="search" placeholder="Search" aria-label="Search"/>
                                <span className="uk-search-icon-flip" uk-search-icon="true"></span>
                            </form>
                        </div>
                        <div className="uk-navbar-nav  uk-visible@m">
                            <li className="user-name"><a href="/">User <span uk-icon="icon: user"></span></a></li>
                        </div>
                        {/*Mobile Hamburger */}
                        <a href="#" className="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon="true" uk-toggle="target: #sidenav"></a>
                    </div>

                    {/* Mobile */}
                    <div className="mobile uk-hidden@m">
                        <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
                            <div className="uk-offcanvas-bar">
                                <ul className="uk-nav">
                                    <div className="uk-margin">
                                        <form className="uk-search uk-search-navbar">
                                            <input className="uk-search-input" type="search" placeholder="Search" aria-label="Search"/>
                                            <span className="uk-search-icon-flip" uk-search-icon="true"></span>
                                        </form>
                                    </div>
                                    <li className=""><a href="#">Therapy Areas</a></li>
                                    <li className=""><a href="#">Our Products</a></li>
                                    <li className="user-name"><a href="#">User <span uk-icon="icon: user"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar