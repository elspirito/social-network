import React, { useEffect } from 'react'
import { Header } from 'app/ui/Header/Header'
import { AsideLeft } from 'app/ui/AsideLeft/AsideLeft'
import { Main } from 'app/ui/Main/Main'
import { Layout } from 'common/components/Layout'
import { checkMeTC } from 'features/auth/model/auth.actions'
import { useAppDispatch } from 'common/hooks/customHooks'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkMeTC())
  }, [])

  return (
    <Layout>
      <Header />
      <AsideLeft />
      <Main />
    </Layout>
  )
}

export default App
