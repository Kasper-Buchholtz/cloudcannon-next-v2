import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children, href }) => {
    let buttonClass = 'button text-regular focus-visible:ring-offset-1 focus-visible:ring-2 ring-primary outline-none  leading-normal tracking-normal font-light inline-flex w-fit items-center gap-2 px-5 py-2 text-center transition-all border border-solid rounded ';

    if (variant === 'primary') {
        buttonClass += 'text-light-0 bg-primary  hover:bg-primary-hover active:bg-primary border-primary active:border active:border-solid active:border-primary-hover';
    } else if (variant === 'secondary') {
        buttonClass += ' bg-dark-800 border-dark-800 text-light-0 hover:bg-transparent hover:text-dark-800 active:bg-dark-800 active:text-light-0 active:border-gray';
    }

    if (href) {
        return (
            <a href={href} className={buttonClass}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
};

export default Button;
