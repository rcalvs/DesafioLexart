function Card(props) {
  console.log(props);

  return (
    <div className='flex border-1 justify-center pt-8 '>
      <div className='container w-36 h-36 border-4 bg-blue-400 mx-2'>
      </div>
      
      <div className='flex-col border-1 relative'>
        <h1 className='text-2xl'>Product Name</h1>
        <span className='italic'>
          Lorem ipsum dolor sit amet, consectetru adipiscigin elit sed</span>
        <h3 className='absolute bottom-4 left-4'>Price</h3>
      </div>

      <div className='m-auto border-1 mx-4'>
      <button className='rounded-lg p-2 px-4 bg-blue-400 hover:bg-blue-500'>
          Buy now
        </button>
      </div>
    </div>
  )
}
export default Card
