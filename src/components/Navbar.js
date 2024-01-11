import React from "react";
import DisneyLogo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/HomeIcon";
import SearchIcon from "../assets/images/SearchIcon";
import WatchlistIcon from "../assets/images/WatchlistIcon";
import OriginalsIcon from "../assets/images/OriginalsIcon";
import MoviesIcon from "../assets/images/MoviesIcon";
import SeriesIcon from "../assets/images/SeriesIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
    // navitem-hover:bg-gradient-to-r navitem-hover:from-white navitem-hover:to-white
    const NavItem = (props) => {
        return (
            <div className="relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full">
                <span className="absolute right-0 bottom-[-5px] left-[-7px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear">{props.children}</span>
            </div>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-body-bg ">
            <div className="container mx-auto flex items-center justify-between px-10 py-3">
                <div className="flex items-center gap-16 ">
                    <Link to="/">
                        <img
                            className="w-28"
                            src={DisneyLogo}
                            alt="Logo-Disney"
                        />
                    </Link>
                    <div className="gap-14 flex flex-row xl:flex hover:cursor-pointer">
                            <div className="flex flex-col">
                            <HomeIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/home">Home</a></p>
                            </div>           

                            
                            <div className="flex flex-col">
                            <SearchIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/explore">Search</a></p>
                            </div>
                           
                                              

                            <div className="flex flex-col">
                            <WatchlistIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/migrate_cw?tray_id=p13n-wl&tray_title=Watchlist&tray_type=watchlist">Watchlist</a></p>
                            </div>
                            

                            <div className="flex flex-col">
                            <OriginalsIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/home?ref=%2Fin%2Fchannels%2Fhotstar-originals">Originals</a></p>
                            </div>
                           

                            <div className="flex flex-col">
                            <MoviesIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/movies">Movies</a></p>
                            </div>
                           
                        

                            <div className="flex flex-col">
                            <SeriesIcon width={"36"} />
                            <p><a href="https://www.hotstar.com/in/migrate_cw?tray_id=1260003991&tray_title=Hotstar%2BSpecials&tray_type=category">Series</a></p>
                            </div>
                            
                        
                    </div>
                </div>
                <button className="transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-lg uppercase tracking-wider text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
