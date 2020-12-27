import './label.scss';

export const Label = ({
    name,
    styles
}) => {
    
    return <label style={{...styles}} data-test="labelComponent" className="shopmate-label">{name}</label>
}