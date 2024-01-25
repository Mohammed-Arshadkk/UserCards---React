import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import axios from 'axios'

function Home() {
 // initialize the state
  const [datas, setDatas] = useState([])
  const [isWaiting, setWaiting] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     // fetch the data
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDatas(data)
  //         setWaiting(false)
  //       })
  //       .catch((error) => { console.log(error) })
  //   }, 3000)
  // }, [])
  // console.log(datas);



  // using axios  
  async function fetchUsers() {
   const result = await axios.get('https://jsonplaceholder.typicode.com/users')
   setDatas(result.data)
   setWaiting(false)
  }
  useEffect(() => {
    setTimeout(()=>{
      fetchUsers()
    },3000)
  },[]) 

  


  return (
    <div>
      < Header />
      {
        isWaiting === true ? (
          <div className='w-[100%] h-[530px] bg-black animate-pulse flex justify-center items-center font-semibold text-3xl text-white'>
            Waiting .......
          </div>
        ) : (
          <div className='flex gap-10 p-10 flex-wrap min-w-[400px]'>
            {
              datas.map((user, index) => {
                return <Card key={index} user={user} />
              })
            }
          </div>
        )
      }

      < Footer />
    </div>
  )
}

export default Home
