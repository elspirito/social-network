import React from 'react'
import { Header } from '../common/layout/header/Header'
import { AsideLeft } from '../common/layout/asideLeft/AsideLeft'
import { Main } from '../common/layout/main/Main'
import { Layout } from '../common/components/Layout'

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
