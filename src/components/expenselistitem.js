import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'


const Expenselisitems=({id,description,amount,createdAt})=>(
 
    
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMM Do YYYY')}</span>
      </div>

      <h3 className="list-item__data">Rs. {amount}</h3>
     
    
     </Link>
   

  
)



export default Expenselisitems