// Styles and Styled Component
import './styles/normalize.css'
import { GlobalStyles } from './styles/base/Global.styled'
// Components
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
// Hooks
import useSakura from './hooks/useSakura'

function App () {
  useSakura()

  return (
    <>
      <GlobalStyles />
      <Header />

      <main className='main'>
        <Hero />
      </main>
    </>
  )
}

export default App
