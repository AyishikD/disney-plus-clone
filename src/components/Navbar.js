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
                {props.children}
                <span className="absolute right-0 bottom-[-5px] left-[-7px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear"></span>
            </div>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-body-bg ">
            <div className="container mx-auto flex items-center justify-between px-10 py-3">
                <div className="flex items-center flex-wrap justify-evenly gap-2">
                    <Link to="/">
                        <img
                            className="w-28"
                            src={DisneyLogo}
                            alt="Logo-Disney"
                        />
                    </Link>
                    <div className="sm:gap-10 gap-2 flex flex-row justify-evenly order-last ">
                        <NavItem>
                            <HomeIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Home</p></a>
                        </NavItem>

                        <NavItem>
                            <SearchIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Search</p></a>
                        </NavItem>

                        <NavItem>
                            <WatchlistIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Watchlist</p></a>
                        </NavItem>

                        <NavItem>
                            <OriginalsIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Originals</p></a>
                        </NavItem>

                        <NavItem>
                            <MoviesIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Movies</p></a>
                        </NavItem>

                        <NavItem>
                            <SeriesIcon width={"36"} />
                            <a href="#"><p className="hidden lg:block">Series</p></a>
                        </NavItem>
                    </div>
                    <button className="transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-lg uppercase tracking-wider text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black sm:order-last">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;