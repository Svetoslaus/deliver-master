import {Table, CloseButton, Button, Card} from 'react-bootstrap'
import Image from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { deleteProdukt } from '@/redux/warenkorb'
//https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


export default function Warenkorb() {
  const dispatch = useDispatch()
  const warenkorb = useSelector((state) => state.warenkorb)
  const clientID = "AeyrZPn6df4y6WOfF6HlX9470t-3aStBPQXtM2kksBbKtxXOeMbjwdUwBVImGExwkZp_X400CJgIk8a6"
  const [kasse, setKasse] = useState(false);

  const entfernen = (produkt) => {
    dispatch(deleteProdukt(produkt))

  }


    // This values are the props in the UI
    const amount = warenkorb.gesamtbetrag;
    const currency = "EUR";
    const style = {"layout":"vertical"};

  // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function (details) {
                      // Your code here after capture the order
                      console.log(details.purchase_units[0].shipping)
                  });
              }}
          />
      </>
  );
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
            <Card.Header as="h5">Total</Card.Header>
            <Card.Body className='text-center'>
            <Card.Title>
              {warenkorb.gesamtbetrag.toFixed(2)}
            </Card.Title>
            { kasse ? (
              <PayPalScriptProvider
                options={{
                    "client-id": clientID,
                    components: "buttons",
                    currency: "EUR"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider> 
            ) : (
              <Button variant='primary' onClick={() => setKasse(true)}>Zur Kase</Button>
            )}
            
            </Card.Body>
            </Card>
          </div>
        </div>


      </div>
        )}

      </div>
    )
  }