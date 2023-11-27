import React from 'react';

const Heading = ({ level = 2, className, children }) => {
    const HeadingTag = `h${level}`;

    return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
