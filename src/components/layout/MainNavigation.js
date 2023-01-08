import { useContext } from "react";

import { Link } from "react-router-dom"
import FavoritesContext from "../../store/favourite-context";
import classes from "./MainNavigation.module.css"
function Navigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}><Link to={"/"}>React List</Link></div>
        <nav>
            <ul>
                <li><Link to="/">AllMeetsup</Link></li>
                <li><Link to="/newmeetsup">NewMeetsup</Link></li>
                <li><Link to="/favourite">FavouritesPage
                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </Link></li>
                
            </ul>
        </nav>
    </header>
}

export default Navigation;