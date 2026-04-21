import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-title'>
        <Student name =" Đàm Tuyết Nhi " age="16" class="26SPIT3"/>
      </div>
    <br/>
      <div className='card-title'>
        <Student name =" Võ Nguyễn Phương Uyên " age="16" class="26SPIT3"/>
      </div>
    <br />
      <div className='card-title'>
        <Student name =" Nguyễn Chí Hiếu " age="16" class="26SPIT3"/>
      </div>
    <br />
       <div className='card-title'>
        <Student name =" Nguyễn Ngọc Quỳnh Như " age="16" class="26SPIT3"/>
      </div> \
    <br />
      <div className='card-title'>
        <Student name =" Nguyễn Ngọc Quỳnh Nhi " age="16" class="26SPIT3"/>
      </div>
    </>
  )
}

export default App
