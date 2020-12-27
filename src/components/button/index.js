import './button.scss';

export const Button = ({
    clickAction,
    text,
    styles,
    type,
    classnames,
    icon,
    disabled
}) => {

    if(!text){
        return null
    }

    // if(!disabled){
    //     disabled = false;
    // }

    if(!type){
        type = 'submit';
    }
    
    return <button type={type} disabled={disabled} style={{...styles}} className={`quizza-btn ${classnames}`} onClick={clickAction}>{icon} <span>{text}</span></button>
}