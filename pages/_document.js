import { Html, Head, Main, NextScript } from 'next/document'
import Sidebar from '../components/sidebar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='overflow-hidden'>
      <div><Sidebar /></div>
        <Main />
        <NextScript />
        
      </body>
      
    </Html>
  )
}
