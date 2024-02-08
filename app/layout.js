import Header from '@/components/header'
import '@/styles/common.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Electrum Dash</title>
      </head>
      <body>
        <Header/>

        {children}
      </body>
    </html>
  );
}
