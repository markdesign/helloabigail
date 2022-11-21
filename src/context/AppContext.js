import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
export const AppContext = createContext();

export const AppProvider = (props) => {

    const [menuOpen, setMenuOpen] = useState(true);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const openMenu = () => {
        setMenuOpen(true);
    };

    const toggle = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <AppContext.Provider value={{ menuOpen, closeMenu, openMenu, toggle }}>
            {props.children}
        </AppContext.Provider>
    )

};

AppProvider.propTypes = {
    children: PropTypes.node,
}