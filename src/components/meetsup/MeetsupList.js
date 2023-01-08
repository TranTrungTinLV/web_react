import classes from './MeetsupList.module.css'
import MeetupsItem from './MeetsupItem';

function MeetupsList(props) {
    return (<ul className={classes.list}>
        {props.meetsup.map((meetup) => (
            <MeetupsItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                image={meetup.image}
                address={meetup.address}
                description={meetup.description}
            />
        ))}
    </ul>)
}

export default MeetupsList;