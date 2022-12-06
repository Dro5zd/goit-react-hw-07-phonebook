import {ContactsWrapper} from './Notification.styled';

interface INotification {
    message: string
}

export function Notification({message}: INotification) {
    return <ContactsWrapper>
        <p>{message}</p>
    </ContactsWrapper>;
}
