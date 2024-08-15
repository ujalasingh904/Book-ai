import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={handleToggle} className="fixed bottom-10 right-5 p-2 md:p-4  rounded-full  bg-black text-white">
            {darkMode ? <FontAwesomeIcon icon={faSun} className='md:text-3xl'/>:<FontAwesomeIcon icon={faMoon} className='md:text-3xl px-1' /> }
        </button>
    );
};

export default DarkModeToggle;
