import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

export default () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark_mode', false);

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode');
            setDarkMode('dark_mode', true);
        } else {
            document.querySelector('body').classList.remove('dark-mode');
            setDarkMode('dark_mode', false);
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
}