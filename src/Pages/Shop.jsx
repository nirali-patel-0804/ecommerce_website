import React from 'react'
import Hero from "../Component/Hero/Hero.jsx"
import Popular from '../Component/Popular/Popular.jsx'
import Offers from '../Component/Offers/Offers.jsx'
import NewCollection from '../Component/NewCollection/NewCollection.jsx'
import NewsLetter from '../Component/NewsLetter/NewsLetter.jsx'
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter/>
    </div>
  )
}

export default Shop
