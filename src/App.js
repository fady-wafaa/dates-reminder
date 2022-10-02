
import {  Container } from 'react-bootstrap';
import {data} from './data';
import DatesCount from './components/DatesCount';
import DateList from './components/DateList';
import Buttons from './components/Buttons';
import { useState, useEffect } from 'react';



function App() {
  const [personDate, setPersonDate] = useState(data);

  const onDelete = () =>{

    setPersonDate([])
  }
  const onViewDate = () =>{

    setPersonDate(data)
  }

  useEffect(() => {
    setPersonDate([])
  }, [])
  

  return (
    <div className="font color-body">
      <Container className='py-5' >

    <DatesCount data={personDate} />

    <DateList data={personDate} />

    <Buttons deleteDate={onDelete}  viewwDate={onViewDate} />  

      </Container>
      
    </div>

  );
}

export default App;
