import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('useDark');
    return [isDark, setIsDark];
}