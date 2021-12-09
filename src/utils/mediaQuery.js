import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 767});
    return isTablet ? children : null;
}

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768 });
    return isTablet ? children : null;
}