export interface Theme {
    name: string;
    colors: {
        backgroundPrimary: string;
        backgroundSecondary: string;
        header: string;
        textPrimary: string;
        textSecondary: string;
        accent: string;
        accentHover: string;
        border: string;
    };
}

export interface Themes {
    [key: string]: Theme;
}
