import { useState, useEffect } from 'react';

import MeetupsList from './../components/meetsup/MeetsupList';


function AllMeetsup() {
    const [isloading, setModalIsLoading] = useState(true);
    const [LoadedMeetup, setLoadedMeetup] = useState([]);

    useEffect(() => {
        setModalIsLoading(true);
        fetch(
            'https://getting-started-react-38eb6-default-rtdb.firebaseio.com/meetsup.json'
            )
        .then(response => { 
            return response.json(); 
        })
        .then((data) => {
            const meetsup = [];

            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key],
                };
                meetsup.push(meetup);
            }

            setModalIsLoading(false);
            setLoadedMeetup(meetsup);
        });
    },[]);
    

    if (isloading) {
        return <section>
            <p>Loading...</p>

        </section>
    }

    return <section>
        <h1>All Meeting Pages</h1>
        <MeetupsList meetsup={LoadedMeetup} />
    </section>;
}

export default AllMeetsup;