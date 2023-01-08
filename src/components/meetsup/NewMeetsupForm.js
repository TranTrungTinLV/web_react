import {useRef} from 'react';

import classes from './NewMeetsup.module.css'
import Card from './../ui/Card';
function NewMeetsupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const decriptionInputRef = useRef();
    function SubmitHandler(e) {
        e.preventDefault(); // not loaded pages

        const enterTitle = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value;
        const enterAddress = addressInputRef.current.value;
        const enterDecription = decriptionInputRef.current.value;

        const meetupData = {
            title: enterTitle,
            image: enterImage,
            address: enterAddress,
            decription: enterDecription,
        }

        props.onAdddMeetup(meetupData);

    }

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" id="title" required ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup image</label>
                <input type="url" id="image" required ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" id="address" required ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="decription">Decription</label>
                <textarea id="decription" rows='5' required ref={decriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetsupForm;