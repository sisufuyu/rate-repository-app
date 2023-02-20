import { Platform } from 'react-native'
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    background: '#24292e',
    onBackground: '#ffffff',
    surface: '#e1e4e8',
    tertiary: '#9ea5ad',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      native: 'Sans-serif',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}
  
export default theme