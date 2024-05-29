import Header from './Components/Nav'
import Body from './Components/Bbody'
import './App.css'
import Bbody2 from './Components/Bbody2'
import Footer from './Components/Ffooter'
import { useState } from 'react'

function App() {
  const [num,setnum]=useState(0)
  
 const count=(coun)=>{
  if(coun==0){
    setnum(num+1)
  }else{
    setnum(num-1)
  }
 }
 let n=[]
if(num){
n.push(num)
}
//  console.log(n)

  return (

   <>
  <Header total={n}/>
  <Body/>
  <Bbody2 count={count}/>
  <Footer/>
   </>
  )
}

export default App
