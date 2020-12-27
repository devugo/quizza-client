// import PropTypes from 'prop-types';
import './input.scss';

export const Input = props => {
    let { name, type, classnames } = props;

    if(!name){
        return null;
    }

    if(!type){
        type = 'text';
    }
    
    return <input {...props} type={type} className={`quzza-input ${classnames}`} />
}

// Input.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string,
//     styles: PropTypes.object,
//     placeholder: PropTypes.string
// };