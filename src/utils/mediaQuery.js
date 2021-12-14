import { useMediaQuery } from 'react-responsive';

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 1279 });
    return isTablet ? children : null;
}

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
}