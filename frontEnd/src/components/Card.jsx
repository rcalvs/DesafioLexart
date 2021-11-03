function Card(props) {
  console.log(props);

  return (
    <div className='flex border-1'>
      <div className='container w-1/3 h-24 border-4 bg-blue-400'>
      </div>
      
      <div className='flex border-1'>
        <h1>Product Name</h1>
        <span>Lorem ipsum dolor sit amet, consectetru adipiscigin elit sed</span>
        <h3>Price</h3>
      </div>

      <div className='flex border-1'>
        <button className='p-4 bg-blue-400'>
          to shop
        </button>
      </div>
    </div>
  )
}
export default Card
