
import { Inter, Oswald, Fira_Sans } from 'next/font/google';

export const firaSans = Fira_Sans({
   subsets: ['latin'],
   weight:['300', '400', '500'],
   display: 'swap',
   variable: '--firasans-font'

})
export const oswald = Oswald({
  subsets: ['latin'],
  weight:['400', '500', '700'],
  display: 'swap',
  variable: '--oswald-font',

})
export const inter = Inter({ 
    subsets: ['latin'], 
    weight: '400', 
    display: 'swap',
    variable: '--inter-font', 
})
