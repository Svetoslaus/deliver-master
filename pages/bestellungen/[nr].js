import {Table, CloseButton, Button, Card, Spinner} from 'react-bootstrap'

import { useRouter } from 'next/router'

export default function Bestellung() {
    const router = useRouter();
    const {nr} = router.query;

    return (
      <div>
        <h1>Bestellstatus</h1>
        <div className='row mt-4'>
          <div className='col-9'>
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Bestell Nr.</th>
                  <th>Kunde</th>
                  <th>Adresse</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{nr}</td>
                  <td>Ragnard Ragnarsson</td>
                  <td>Bankstraße 2</td>
                  <td>
                    <span>In Arbeit</span>
                    <Spinner animation='border' variant='success' size='sm'/>
                  </td>
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
            <Button variant='success disabled'>bezahlt</Button> 
            </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }