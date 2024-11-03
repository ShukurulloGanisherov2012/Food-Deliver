import React, { useState } from 'react'
import "./css/Home.css"
import { AppDowload, Explore, Food, Header } from '../components'

export default function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <Food category={category} />
      <AppDowload  />
    </div>
  )
}
