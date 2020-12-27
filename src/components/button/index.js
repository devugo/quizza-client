import { FaIcon } from '../fa-icon';
import './button.scss';

export const Button = ({
    clickAction,
    text,
    styles,
    type,
    classnames,
    icon,
    disabled,
    spin
}) => {

    if(!text){
        return null
    }

    if(!type){
        type = 'submit';
    }
    
    return (
        <button type={type} disabled={disabled} style={{...styles}} className={`quizza-btn ${classnames}`} onClick={clickAction}>
            {icon} 
            {
                spin ? <FaIcon text="spinner" /> :<span>{text}</span>
            }
        </button>
    );
}