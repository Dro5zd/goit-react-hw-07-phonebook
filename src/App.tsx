import {ContactsList} from './components/ContactsList/ContactsList';
import {ContactForm} from './components/ContactForm/ContactForm';
import {MouseEvent, useState} from 'react';
import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {HomeScreen} from './components/HomeScreen/HomeScreen';
import {useAppDispatch, useAppSelector} from './redux/store';
import {addContact, deleteContact} from './redux/operations';
import {selectContacts, selectError, selectIsLoading} from './redux/selectors';


export const App = () => {

    const contacts = useAppSelector(selectContacts)
    const isLoading = useAppSelector(selectIsLoading)
    const error = useAppSelector(selectError)
    const dispatch = useAppDispatch()


    const [showApp, setShowApp] = useState(true)


    const addContactHandler = (name: string, phoneNumber: string) => {
        if (!contacts.map(contact => contact.name).includes(name)) {
            dispatch(addContact({name, phoneNumber}))
        } else alert(`${name} is already in contacts`);
    };

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteContact(e.currentTarget.id))
    };

    const showAppHandler = () => {
        setShowApp(!showApp)
    }

    const currentTime = () => {
        const options: {} = {hour: '2-digit', minute: '2-digit'};
        const today = new Date();
        return today.toLocaleString('ua-UA', options)
    }

    return (
        <IphoneWrapper currentTime={currentTime()}>
            {showApp
                ?
                <HomeScreen showAppHandler={showAppHandler}
                            currentTime={currentTime()}
                />
                : <><ContactForm addContact={addContactHandler}
                                 showAppHandler={showAppHandler}
                />
                    {isLoading && !error && <b>Request in progress...</b>}
                    <ContactsList deleteUser={deleteUser}/></>}
        </IphoneWrapper>
    );
};
