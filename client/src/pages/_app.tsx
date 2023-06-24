import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apolloClient'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
        <Component {...pageProps} />
    </ApolloProvider>
  )
}
