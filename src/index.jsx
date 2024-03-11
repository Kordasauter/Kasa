//composants React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Composants communs
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//Pages
import Home from './components/Home/Home'
import Logement from './components/Logement/Logement'
import APropos from './components/APropos/APropos'
import NotFound from './components/NotFound/NotFound'
//style
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
                <Route exact path="/logement/:id" element={<Logement />} />
                <Route exact path="/logement/" element={<NotFound />} />
                <Route exact path="/about" element={<APropos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
