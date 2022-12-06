import {ContactsList} from './components/ContactsList/ContactsList';
import {ContactForm} from './components/ContactForm/ContactForm';
import {MouseEvent, useEffect, useState} from 'react';
import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {HomeScreen} from './components/HomeScreen/HomeScreen';
import {addContact, deleteContact} from './redux/contactsSlice'
import {useAppDispatch, useAppSelector} from './redux/store';

export const App = () => {
    // @ts-ignore
    const localStorageState = JSON.parse(localStorage.getItem('contacts'))

    const contacts = useAppSelector(state => state.contacts)
    const dispatch = useAppDispatch()

    const [showApp, setShowApp] = useState(true)

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const addContactHandler = (name: string, phoneNumber: string) => {
        if (!contacts.map(contact => contact.name).includes(name)) {
            dispatch(addContact(name, phoneNumber))
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
                    <ContactsList deleteUser={deleteUser}/></>}
        </IphoneWrapper>
    );
};
