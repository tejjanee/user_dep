import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>

    {/* components */}
     <Hero title={"Welcome to IIT Indore Health Center! | Your Health, Our Priority."} imageUrl={"/hero.png"}/>
     <Biography imageUrl={"/about.png"}/>
     <Departments/>
     <MessageForm/>
    </>
  )
}

export default Home
