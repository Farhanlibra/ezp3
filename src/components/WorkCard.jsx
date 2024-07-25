import React from 'react'

const WorkCard = ({w}) => {
  const{image, title, desc}=w
  
  return (
    <div>
         <div className='cardwork'>
     
        
        <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
{desc}</p>
   
  </div>
</div>
    </div>
    </div>
  )
}

export default WorkCard