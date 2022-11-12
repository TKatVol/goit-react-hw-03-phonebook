import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import { StyledForm, StyledLabel, StyledInput, StyledButton } from "../ContactForm/ContactForm.styled";

const schema = yup.object({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .required('Name is required'),
    
    number: yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
        .required('Phone number is required'),
});

export const ContactForm = ({ onSubmit }) => {
    
    const initialValues = {
        name: '',
        number: '',
    };
    
    return (
        <>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={schema}>
                <StyledForm autoComplete="off">
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                        <StyledInput type="text" name="name" />
                    <ErrorMessage name="name" />

                    <StyledLabel htmlFor="number">Number</StyledLabel>
                        <StyledInput type="tel" name="number" />
                    <ErrorMessage name="number" />

                    <StyledButton type="submit">Add contact</StyledButton>
                </StyledForm>
            </Formik>
        </>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};