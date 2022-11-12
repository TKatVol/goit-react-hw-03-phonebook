import PropTypes from 'prop-types';
import { StyledLabel,  StyledInput} from "../Filter/Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
                <StyledInput type="text" name="filter" value={value} onChange={onChange} />
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};