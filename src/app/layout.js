import Header from '../components/header'
import '../styles/common.scss'

export const metadata = {
  title: {
    default: 'Electrum Dash wallet',
    template: '%s - Electrum Dash wallet'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Electrum Dash wallet</title>
      </head>
      <body>
        <Header/>

        {children}
      </body>
    </html>
  );
}
