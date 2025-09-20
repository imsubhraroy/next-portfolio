export interface HeaderInterface {
    isDarkMode: boolean;
    setTheme: () => void;
    children?: React.ReactNode;
}

export interface PropsInterface {
    isDarkMode: boolean;
    setTheme: () => void;
}