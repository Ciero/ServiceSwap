import React from 'react';

const CardContent = ({ children, customClasses, noPadding }) => (
    <div className={`${noPadding ? 'rct-full-block' : 'rct-block-content'} ${customClasses ? customClasses : ''}`}>
        {children}
    </div>
);

export { CardContent };