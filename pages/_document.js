import { Html, Head, Main, NextScript } from 'next/document'
import Sidebar from '../components/sidebar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='overflow-hidden'>
      <div className="max-sm:hidden"><Sidebar /></div>
        <Main />
        <NextScript />
        
      </body>
      
    </Html>
  )
}
