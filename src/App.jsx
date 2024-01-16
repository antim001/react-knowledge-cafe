
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   const [bookMarks,setbookMarks]=useState([])
   const [readingTime,setReadingTime]=useState(0)
   const handleAddToBookmarks=(blogs)=>{
        const newBookMarks=[...bookMarks,blogs];
        setbookMarks(newBookMarks);
   }
   const handleAsReading=time=>{
       setReadingTime(readingTime+time);
   }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleAsReading={handleAsReading}></Blogs>
      <Bookmarks readingTime={readingTime} bookMarks={bookMarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
