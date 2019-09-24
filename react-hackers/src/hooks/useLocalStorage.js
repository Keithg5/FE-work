import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parsee(item) : initialValue;
    });

    const setValue = (value) =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify)
    };

    return [storedValue,setValue]
};
