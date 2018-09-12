import React from 'react';


import { CardHeading } from './CardHeading'

const Card = ({ children, customClasses, heading, headingCustomClasses, colClasses }) => (
    <div className={colClasses && colClasses}>
        <div className={`rct-block ${customClasses ? customClasses : ''}`}>
            {heading &&
                <CardHeading
                    title={heading}
                    customClasses={headingCustomClasses}
                />
            }
            {children}
        </div>
    </div>
);

export { Card };