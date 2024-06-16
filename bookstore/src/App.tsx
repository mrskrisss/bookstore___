// import { useState } from 'react'
import Header from './components/header'
import Container from './components/container'
import Footer from './components/footer'
import Main from './components/main'
import CardPost from './components/cardPost'
import CardFavorite from './components/cardFavorite'
import './App.scss'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Header />
        <Main>
          <CardPost />
          <CardFavorite />
        </Main>
        <Footer />
      </Container>
    </>
  )
}

export default App
