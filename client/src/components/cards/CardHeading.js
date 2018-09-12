import React from 'react';
import PropTypes from 'prop-types';

const CardHeading = ({ title, customClasses }) => (
    <div className={`rct-block-title ${customClasses ? customClasses : ''}`}>
        <h4>{title}</h4>
    </div>
);

// type checking props
CardHeading.propTypes = {
    title: PropTypes.any
}

export { CardHeading };