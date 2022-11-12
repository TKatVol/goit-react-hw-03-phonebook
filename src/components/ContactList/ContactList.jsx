import PropTypes from 'prop-types';
import { StyledList, StyledItem, StyledContact, StyledButton } from "../ContactList/ContactList.styled";

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <>
            <StyledList>
                {contacts.map(({id, name, number}) => {
                    return (
                        <StyledItem key={id}>
                            <StyledContact>{name}: {number}</StyledContact>
                            <StyledButton type="button" onClick={()=>onDeleteContact(id)}>Delete</StyledButton>
                        </StyledItem>
                )})}
            </StyledList>
        </>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func,
};