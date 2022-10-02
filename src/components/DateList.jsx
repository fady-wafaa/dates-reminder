import React from 'react'
import { Row, Col } from 'react-bootstrap';

const DateList = ({data}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="12" className=''>

       <div className='rectangle p-2 last'>
       {data.length ? (data.map(ele => {
       return (
       
       <div key={ele.id} className='d-flex border-bottom mx-2 my-2'>
         <img className='img-avatar' src={ele.img} alt='person' />
         <div className='px-3'>
           <p className='d-inline fs-5'>  {ele.name}     </p>
           <p className='fs-6'> {ele.date} </p>
         </div>
       </div>
       
       )}
       )) : <h2 className='p-5 text-center'>لا يوجد مواعيد اليوم </h2>}

       </div>
       
    </Col>
  </Row>
  )
}

export default DateList