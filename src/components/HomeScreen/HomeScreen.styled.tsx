import styled from 'styled-components';
import {Camera} from '@styled-icons/boxicons-solid/Camera';
import {BookContacts} from '@styled-icons/fluentui-system-filled/BookContacts';

export const HomeScreenWrapper = styled.div`
  background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

export const TimeSpan = styled.span`
  top: 50px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  width: 100%;
  font-size: 70px;
  font-weight: 100;
  padding-top: 60px;
  position: absolute;
  display: block;
`;

export const ContactsIcon = styled(BookContacts)`
  bottom: 50px;
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  display: block;
  left: auto;
  right: 30px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const CameraIcon = styled(Camera)`
  bottom: 50px;
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  left: 30px;
  position: absolute;
  display: block;
  color: white;

  &:hover {
    cursor: pointer;
  }

`;