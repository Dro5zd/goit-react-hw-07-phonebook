import {FilterInput, FilterWrapper, SearchIcon} from './Filter.styled';
import {ChangeEvent, useState} from 'react';
import {deleteContact} from '../../redux/contactsSlice';
import {useAppDispatch} from '../../redux/store';
import {filterContacts} from '../../redux/filterSlice';

export const Filter = () => {

    const [filter, setFilter] = useState('')
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setFilter(value.toLowerCase())
        dispatch(filterContacts(value))
    };

    return (
        <FilterWrapper>
            <FilterInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Search"
                value={filter}
                onChange={onChangeHandler}
            />
            <SearchIcon/>
        </FilterWrapper>
    );
}