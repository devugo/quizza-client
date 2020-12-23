import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
    clickAction,
    text,
    styles
}) => {

    if(!text){
        return null
    }
    
    return <button style={{...styles}} data-test="buttonComponent" className="shopmate-btn" onClick={clickAction}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    clickAction: PropTypes.func,
    styles: PropTypes.object
};

export default Button;