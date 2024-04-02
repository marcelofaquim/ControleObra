import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({

    colors: {
        gray: {
            300:'#8D8D99'
        },
        blue: {
            500: '#338CFF',
            800: '#0B3B6'
        },

        red: {
            300: '#8b0000',
            400: '#b22222'
        },

        white: '#fff',
        black: '#000'
        
        },
        
        fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 20,
            xl: 24
        }
    
})