
import Header from './layouts/AppHeader.tsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'

function App() {


  return (
    <BrowserRouter>
    <div className="bg-background text-foreground">
    <Header />
    <Layout />
    </div>
    </BrowserRouter>
  )
}

export default App
