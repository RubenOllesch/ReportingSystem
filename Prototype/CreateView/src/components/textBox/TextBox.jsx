import React from 'react';
import propTypes from 'prop-types';

import './textBox.scss';

const TextBox = ({ text }) => (
    <p>
        {text}
    </p>
);

export default TextBox;

TextBox.propTypes = {
    text: propTypes.string.isRequired
};
