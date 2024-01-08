import React from 'react'
import { Header } from 'app/ui/Header/Header'
import { AsideLeft } from 'app/ui/AsideLeft/AsideLeft'
import { Main } from 'app/ui/Main/Main'
import { Layout } from 'common/components/Layout'

const App = () => {
  return (
    <Layout>
      <Header />
      <AsideLeft />
      <Main />
    </Layout>
  )
}

export default App
