import React from 'react'
import { Row, Col } from 'react-bootstrap';


const DatesCount = ({data}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="12" className='mb-3'>
      
       لديك {data.length} مواعيد اليوم
    </Col>
  </Row>
  )
}

export default DatesCount