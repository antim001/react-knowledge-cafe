
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   const [bookMarks,setbookMarks]=useState([])
   const handleAddToBookmarks=(blogs)=>{
        const newBookMarks=[...bookMarks,blogs];
        setbookMarks(newBookMarks);
   }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
