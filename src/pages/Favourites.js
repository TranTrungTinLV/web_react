import {useContext} from 'react';
import FavoritesContext from '../store/favourite-context';
import MeetupsList from './../components/meetsup/MeetsupList';


function FavouritesPage() {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>Do you no favourite. Start adding some?</p>
    }else{
        content = <MeetupsList meetsup={favoritesCtx.favorites}/>
    }
    return <section>
        <h1>My Favorite</h1>
        {content}
    </section>;
}

export default FavouritesPage;