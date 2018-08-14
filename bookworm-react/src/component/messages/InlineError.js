import React,{component} from 'react';
import PropTypes from 'prop-types';
const InlineError = ({text}) => (
    <span style={{color:'#eb7679'}}>{text}</span>
);
InlineError.propTypes = {
    text : PropTypes.string.isRequired
}
export default InlineError;