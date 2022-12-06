import React from 'react';
import {BatteryIcon, Iphone, ReceptionIcon, Time, WifiIcon} from './IphoneWrapper.styled';

interface IIphoneWrapper {
    currentTime: string
    children: JSX.Element
}

export const IphoneWrapper = ({currentTime, children}: IIphoneWrapper) => {
    return (
        <Iphone>
            <i>Speaker</i>
            <b>Camera</b>
            <Time>{currentTime}</Time>
            <BatteryIcon/>
            <WifiIcon/>
            <ReceptionIcon/>
            {children}
        </Iphone>
    );
};


