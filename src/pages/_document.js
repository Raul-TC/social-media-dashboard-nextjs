import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-light bg-dark dark:text-light-dark text-titles-dark min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
