// import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
    type,
    name,
    styles,
    placeholder
}) => {

    if(!name){
        return null;
    }

    if(!type){
        type = 'text';
    }
    
    return <input placeholder={placeholder} type={type} name={name} id={name} style={{...styles}} className="quzza-input" />
}

// Input.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string,
//     styles: PropTypes.object,
//     placeholder: PropTypes.string
// };