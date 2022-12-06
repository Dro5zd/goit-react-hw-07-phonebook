import {CameraIcon, ContactsIcon, HomeScreenWrapper, TimeSpan,} from './HomeScreen.styled';

interface IHomeScreen {
    currentTime: string
    showAppHandler: () => void
}

export const HomeScreen = ({showAppHandler, currentTime}: IHomeScreen) => {

    return <HomeScreenWrapper>
        <TimeSpan>{currentTime}</TimeSpan>
        <CameraIcon/>
        <ContactsIcon onClick={showAppHandler}/>
    </HomeScreenWrapper>
}