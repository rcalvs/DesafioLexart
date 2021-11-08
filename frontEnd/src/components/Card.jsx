import React from 'react';

function Card(props) {
  console.log(props);

  const { title, price, permalink, thumbnail } = props.product;

  if (thumbnail === undefined) {
    return (
      <div className='flex border-1 justify-center pt-8'>
        <div className='container w-36 h-36 bg-blue-400 mx-2'>
          <img 
            className='w-36 h-36'
            src={props.product.image}
            alt={`foto do produto ${props.product.title}`}
          />
        </div>
        
        <div className='container flex-col p-2 max-w-md relative shadow-md'>
          <h1 className='text-2xl'>{props.product.title}</h1>
          {/* <p className='italic pt-2'>
            Lorem ipsum dolor sit amet, consectetru adipiscigin elit sed</p> */}
          <h3 className='absolute bottom-4 text-blue-500 right-8'>{props.product.price}</h3>
        </div>

        <div className='m-auto border-1 mx-4'>
          <a href={props.product.link}>
            <button className='rounded-lg p-2 px-4 bg-blue-400 hover:bg-blue-500'>
              Buy now
            </button>
          </a>
        </div>
      </div>
    )
  } 

 

  return (
    <div className='flex border-1 justify-center pt-8'>
      <div className='container w-36 h-36 bg-yellow-400 mx-2'>
        <img 
          className='w-36 h-36'
          src={thumbnail}
          alt={`foto do produto ${title}`}
        />
      </div>
      
      <div className='container flex-col p-2 max-w-md relative shadow-md'>
        <h1 className='text-2xl'>{title}</h1>
        {/* <p className='italic pt-2'>
          Lorem ipsum dolor sit amet, consectetru adipiscigin elit sed</p> */}
        <h3 className='absolute bottom-4 text-yellow-500 right-8'>R$ {price}</h3>
      </div>

      <div className='m-auto border-1 mx-4'>
        <a href={permalink}>
          <button className='rounded-lg p-2 px-4 bg-yellow-400 hover:bg-yellow-500'>
            Buy now
          </button>
        </a>
      </div>
    </div>
  )
  
}
export default Card
