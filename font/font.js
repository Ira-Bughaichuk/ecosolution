
import { Oswald, Fira_Sans } from 'next/font/google';

export const firaSans = Fira_Sans({
   subsets: ['latin'],
   style: ["normal"],
   weight:['300', '400', '500'],
   display: 'swap',
  //  variable: '--firasans-font'

})
export const oswald = Oswald({
  subsets: ['latin'],
  weight:['400', '500', '700'],
  style: ["normal"],
  display: 'swap',
  // variable: '--oswald-font',

})
