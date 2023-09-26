import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import Header from './Components/Header/Header'
import Login from './Pages/Login/Login.jsx'
import RouterPage from './router/RouterPage'

function App() {
  return (
      <>
        <Header />
        <RouterPage/>
        <ContactForm/>
    </>
  )
}

export default App
