import {Table, CloseButton, Button, Card} from 'react-bootstrap'
import Image from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

export default function Warenkorb() {
  // const dispatch = useDispatch()
  // const warenkorb = useSelector((state) => state.warenkorb)
    return (
      <div>
        <h1>Warenkorb</h1>
        <div className='row mt-4'>
          <div className='col-9'>
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Bild</th>
                  <th>Name</th>
                  <th>Extras</th>
                  <th>Menge</th>
                  <th>Betrag</th>
                  <th><CloseButton disabled/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={'/bilder/produkte/drinks.jpg'} alt='drinks' width={50} height={50}/>
                  </td>
                  <td>Soft Drinks</td>
                  <td>doppelt</td>
                  <td>1</td>
                  <td>1.99</td>
                  <td><Button className='btn-sm'>X</Button></td> 
                </tr>
                <tr>
                  <td>
                    <img src={'/bilder/produkte/pizza.jpg'} alt='pizza' width={50} height={50}/>
                  </td>
                  <td>Pizza</td>
                  <td>doppelt</td>
                  <td>1</td>
                  <td>4.99</td>
                  <td><Button className='btn-sm'>X</Button></td> 
                </tr>
              </tbody> 
            </Table>
          </div>
          <div className='col-3 p-2'>
            <Card>
            <Card.Header as="h5">Gesamt</Card.Header>
            <Card.Body className='text-center'>
            <Card.Title>
              7.25€
            </Card.Title>
            <Button variant='primary'>Zur Kase</Button> 
            </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }