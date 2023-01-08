import classes from './MeetsupItem.module.css'
import Card from './../ui/Card';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourite-context';
function MeetupsItem(props) {

    const FavouriteContxt = useContext(FavouritesContext);

    const itemsFavourites = FavouriteContxt.itemIsFavorite(props.id);

    function toggleFavouritesStatusHandle() {
        if(itemsFavourites){
            FavouriteContxt.removeFavorite(props.id);
        }else{
            FavouriteContxt.addFavorite({
                id: props.id,
                description:props.description,
                title: props.title,
                address: props.address,
                image: props.image,
            });
        }
    }


    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div  className={classes.actions}>
                <button onClick = {toggleFavouritesStatusHandle}>
                {itemsFavourites ? 'Remove from Favorites' : 'To Favorites'}
                </button>
            </div>
        </Card>
    </li>
}

export default MeetupsItem;


