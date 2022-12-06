import {
    BackIcon,
    ContactFormButton,
    ContactFormLabel,
    ContactFormTitle,
    ContactFormWrapper,
    Input,
    PhoneIcon,
    UserIcon
} from './ContactForm.styled';
import {ChangeEvent, FormEvent, useState} from 'react';

interface IContactForm {
    addContact: (name: string, phoneNumber: string) => void
    showAppHandler: () => void
}

export const ContactForm = ({addContact, showAppHandler}: IContactForm) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addContact(name, phoneNumber);
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setPhoneNumber('');
    };

    return (
        <div>
            <BackIcon onClick={showAppHandler}/>
            <ContactFormTitle>Phonebook</ContactFormTitle>
            <ContactFormWrapper onSubmit={handleSubmit}>
                <ContactFormLabel>
                    <UserIcon/>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={handleNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </ContactFormLabel>
                <ContactFormLabel>
                    <PhoneIcon/>
                    <Input
                        type="tel"
                        name="number"
                        value={phoneNumber}
                        placeholder="Number"
                        onChange={handleNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </ContactFormLabel>
                <ContactFormButton type="submit">Add contact</ContactFormButton>
            </ContactFormWrapper>
        </div>
    );
};
