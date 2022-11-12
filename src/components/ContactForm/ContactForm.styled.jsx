import { Form, Field } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    padding: 10px;
    display: grid;
    justify-items: start;
    border: 2px solid #073b63;
`;

export const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-weight: 600;
`;

export const StyledInput = styled(Field)`
    margin-bottom: 20px;
`;

export const StyledButton = styled.button`
    padding: 8px;
    font-weight: 600;
    background-color: #2d92e0;
    border: none;
    cursor: pointer;
`;
