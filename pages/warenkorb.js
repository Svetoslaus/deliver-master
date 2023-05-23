import {Table, CloseButton, Button, Card} from 'react-bootstrap'
import Image from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { deleteProdukt } from '@/redux/warenkorb'

export default function Warenkorb() {
  const dispatch = useDispatch()
  const warenkorb = useSelector((state) => state.warenkorb)

  const entfernen = (produkt) => {
    dispatch(deleteProdukt(produkt))

  }

    return (
      <div>
        {warenkorb.warenAnzahl === 0 ? (
          <h2>The Basket is empty!</h2>
        ) : (

    
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
                {warenkorb.produkte.map((produkt) => (
                <tr key={produkt._id}>
                  <td>
                    <img src={produkt.bild} alt={produkt.name} width={50} height={50}/>
                  </td>
                  <td>
                    <Link href={`/produkte/${produkt.url}`}>
                      <div className='text-danger'>{produkt.name}</div>
                    </Link>
                  </td>
                  <td>{produkt.extras.map(extra => (
                    <span key={extra._id}>{extra.text}</span>
                  ))}
                  </td>
                  <td>{produkt.menge}</td>
                  <td>{(produkt.preis*produkt.menge).toFixed(2)}</td>
                  <td><Button className='btn-sm' onClick={() => entfernen(produkt)}>X</Button></td> 
                </tr>
                ))}
              </tbody> 
            </Table>
          </div>
          <div className='col-3 p-2'>
            <Card>
            <Card.Header as="h5">Gesamt</Card.Header>
            <Card.Body className='text-center'>
            <Card.Title>
              {warenkorb.gesamtbetrag.toFixed(2)}
            </Card.Title>
            <Button variant='primary'>Zur Kase</Button> 
            </Card.Body>
            </Card>
          </div>
        </div>


      </div>
        )}

      </div>
    )
  }