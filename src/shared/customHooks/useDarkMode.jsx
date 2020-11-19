import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../store/themeSlice";

export const useDarkMode = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
  
    const toggleTheme = () => {
      if (theme === 'light') {
        dispatch(setTheme('dark'));
        window.localStorage.setItem('theme', 'dark');
      } else {
        dispatch(setTheme('light'))
        window.localStorage.setItem('theme', 'light');
      }
    };
    
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
  
      if (localTheme) {
        setTheme(localTheme);
      } else {
        window.localStorage.setItem('theme', 'light');
      }
    }, [])
  
    return [theme, toggleTheme]
};