import PropTypes from 'prop-types';
import './textarea.scss';

const Textarea = ({
    name,
    styles
}) => {

    if(!name){
        return null;
    }
    
    return <textarea name={name} id={name} style={{...styles}} data-test="textareaComponent" className="shopmate-textarea"></textarea>
}

Textarea.propTypes = {
    name: PropTypes.string,
    styles: PropTypes.object
};

export default Textarea;