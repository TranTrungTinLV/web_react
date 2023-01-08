import { useHistory } from 'react-router-dom';

import NewMeetsupForm from '../components/meetsup/NewMeetsupForm';
function NewMeetsup() {

    const history = useHistory();

    function addMeetsupHandler(meetupData) {
        fetch('https://getting-started-react-38eb6-default-rtdb.firebaseio.com/meetsup.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });

    }

    return (
        <section>
            <h1>
                Add New Meets up
            </h1>
            <NewMeetsupForm onAdddMeetup={addMeetsupHandler} />
        </section>);
}

export default NewMeetsup;