
import Header from './layouts/AppHeader.tsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'
import AppLayout from './layouts/AppLayout.tsx'

function App() {


  return (
    <BrowserRouter>
    <div className="bg-background text-foreground">
    <Header />
    <AppLayout />
    {/* <Layout /> */}
    </div>
    </BrowserRouter>
  )
}

export default App
