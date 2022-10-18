import React from "react";
import sprite from './sprites.svg'
import defaultClasses from '@magento/venia-ui/lib/components/Icon/icon.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const Icons = props => {
    const { className, fill, height, id, width } = props;
    const classes = useStyle(defaultClasses);

    return (
        <span className={classes.root}>
            <svg
                className={className}
                fill={fill}
                height={height}
                width={width}
            >
                <use href={`${sprite}#${id}`} />
            </svg>
        </span>
    );
};

Icons.defaultProps = {
    fill: 'none',
    className: '',
    height: 25,
    width: 25,
};

export default Icons;