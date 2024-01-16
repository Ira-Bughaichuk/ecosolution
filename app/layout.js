import { firaSans } from '@/font/font';
import './globals.scss';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'EcoSolution',
  description: 'The site offers insights into innovative environmental technologies and solutions for environmental preservation.',
  icons: [
    {
      url: '/icons/favicon.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://ecosolution-liard.vercel.app',
    title: 'EcoSolution',
    description:
      'The site offers insights into innovative environmental technologies and solutions for environmental preservation.',
    siteName: 'EcoSolution',
    images: [{ url: '/ogp/main.jpg' }, { url: '/ogp/main.png' }],
    
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
      <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '5px',
              borderColor:'#173D33',
              borderWidth:'1px',
              background: '#F3F5FA',
              color: '#173D33'
            },
            duration: 2500,
          }}
        />
        {children}
        </body>
    </html>
  )
}
