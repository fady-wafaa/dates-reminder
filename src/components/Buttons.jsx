import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const Buttons = ({deleteDate ,viewwDate}) => {
  return (
    <Row className='justify-content-center my-2'>
    <Col sm="12" className='d-flex justify-content-between align-content-center'>
      <Button onClick={deleteDate} className='btn-style p-2'>
          مسح الكل
      </Button>
      <Button onClick={viewwDate} className='btn-style p-2'>
          عرض الكل
      </Button>
    </Col>
  </Row>
  )
}

export default Buttons