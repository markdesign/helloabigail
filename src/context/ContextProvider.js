import React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './AppContext';

let contexts = [
    <AppProvider key="appProvider" />
];

const ProviderComposer = (props) => {
    return props.contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids,
            }),
        props.children
    );
};

const ContextProvider = (props) => {
    return (
        <ProviderComposer contexts={contexts}>
            {props.children}
        </ProviderComposer>
    )
};

export default ContextProvider;

ContextProvider.propTypes = {
    children: PropTypes.node,
}