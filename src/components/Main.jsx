import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>
    <div className="main-container">
        <div className="section-one">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btns">
                <button className='shop-btn'>Shop Now</button>
                <button className='category-btn'>Category</button>
            </div>
            <span>Also Available On</span>
            <div className="icons">
                <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoSUOeNW1j1QKp8VFVegTxlkrulq1wYydjQ&s" alt="" />
                <img className='img' src="https://images.easyfundraising.org.uk/retailer/cropped/amazon.png" alt="" />
            </div>
        </div>
        <img src="https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?t=st=1725897872~exp=1725901472~hmac=ae9b221c2a1baae278c47ffaa51b034a7d836ebf44e95b9f2c93c860a8947d40&w=740" alt="" />
    </div>
    </>
  )
}

export default Main