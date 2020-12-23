export const FaIcon = ({
    text,
    color,
    size
}) => {
    if(!text){
        return null;
    }
    return (
        <i className={`fa fa-${text}`} style={{color: color, fontSize: size}}></i>
    )
}