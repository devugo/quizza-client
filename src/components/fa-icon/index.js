export const FaIcon = ({
    text,
    color,
    size,
    classNames
}) => {
    if(!text){
        return null;
    }
    return (
        <i className={`fa fa-${text} ${classNames}`} style={{color: color, fontSize: size}}></i>
    )
}