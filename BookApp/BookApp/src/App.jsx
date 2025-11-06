import React from 'react'
import "./App.css"
import Book from './Components/Books/Book'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRotes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <div id='app'>
         <Book src={"https://tse3.mm.bing.net/th/id/OIP.vbgKIwzgQf_gi2kHoBzBQgHaEK?pid=Api&P=0&h=220"} title="Magic" price="60"/>
           <Book src="https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg?cs=srgb&dl=antique-book-book-bindings-1005324.jpg&fm=jpg" title="Silver" price="70"/>
             <Book src="https://tse3.mm.bing.net/th/id/OIP.mtTFRXGMY-mB6taL8DTTswHaEO?pid=Api&P=0&h=220" title="Gold" price="59"/>
    </div>


    </>
  )
}

export default App
