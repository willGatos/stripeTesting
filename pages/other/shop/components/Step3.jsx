import React from 'react'
//import BarInput from '../../../common/components/BarInput';
import { useLayoutEffect } from 'react';
import Head from "next/head"
function Step3({DTO, setDTO}) {

  let runOnce = false

  const styles = {
    "html": {
      "height": "auto"
    },
    'card-number input': {
        'width': '20em',
        'font-size': '20px',
        'border': '1px gray dotted',
        'padding': '3px',
        'margin': '3px',
        'font-weight': 'bold'
    },
    'card-number input': {
        'background-color': '#BBBBBB'
    },
    'card-date input': {
        'background-color': '#CCCCCC'
    },
    'card-cvv input': {
        'background-color': '#DDDDDD'
    },
    'card-postal-code input': {
        'background-color': '#EEEEEE'
    }
    };

  useLayoutEffect(()=> {
    console.log("234")

    if(!runOnce){

      const form = document.getElementById('payment-form'); 
 
      const cardResponse = document.getElementById('card-response');

      //Error
      const displayCardNumberError = document.getElementById('card-number-errors');
      const displayCardDateError = document.getElementById('card-date-errors');
      const displayCardCvvError = document.getElementById('card-cvv-errors');
      const displayCardPostalCodeError = document.getElementById('card-postal-code-errors');

      const clover = new Clover('24a073c8c33edcdc534c33dcbd5ae6ce');
      const elements = clover.elements();

      const cardNumber = elements.create('CARD_NUMBER', styles);
      const cardDate = elements.create('CARD_DATE', styles);
      const cardCvv = elements.create('CARD_CVV', styles);
      const cardPostalCode = elements.create('CARD_POSTAL_CODE', styles);


      cardNumber.mount('#card-number');
      cardNumber.addEventListener('change', function(event) {
        console.log(`cardNumber changed ${JSON.stringify(event)}`);
      });
      cardNumber.addEventListener('blur', function(event) {
          console.log(`cardNumber blur ${JSON.stringify(event)}`);
      });



      cardDate.mount('#card-date');
      cardDate.addEventListener('change', function(event) {
          console.log(`cardDate changed ${JSON.stringify(event)}`);
      });
      cardDate.addEventListener('blur', function(event) {
          console.log(`cardDate blur ${JSON.stringify(event)}`);
      });


      cardCvv.mount('#card-cvv');
      cardCvv.addEventListener('change', function(event) {
          console.log(`cardCvv changed ${JSON.stringify(event)}`);
      });
      cardCvv.addEventListener('blur', function(event) {
          console.log(`cardCvv blur ${JSON.stringify(event)}`);
      });



      cardPostalCode.mount('#card-postal-code');
      cardPostalCode.addEventListener('change', function(event) {
          console.log(`cardPostalCode changed ${JSON.stringify(event)}`);
      });
      cardPostalCode.addEventListener('blur', function(event) {
          console.log(`cardPostalCode blur ${JSON.stringify(event)}`);
      });


      // Handle real-time validation errors from the card element
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Use the iframe's tokenization method with the user-entered card details
        clover.createToken()
          .then(function(result) {
          if (result.errors) {
            Object.values(result.errors).forEach(function (value) {
              displayError.textContent = value;
            });
          } else {
            cloverTokenHandler(result.token);
          }
        });
      });
      runOnce = true;
    }

    
  },[])

  return (
    <>
    <div>
      <h3>Tarjeta de Crédito</h3>
      <form action="/charge" method="post" id="payment-form">

            <div className="form-row top-row">
                <div id="amount" className="field card-number">
                  <input name="amount" placeholder="Amount"/>
                </div>
            </div>

              <div className="form-row top-row">
                <div id="card-number" className="field card-number"></div>
                <div className="input-errors" id="card-number-errors" role="alert"></div>
              </div>
            
              <div className="form-row">
                <div id="card-date" className="field third-width"></div>
                <div className="input-errors" id="card-date-errors" role="alert"></div>
              </div>
              
              <div className="form-row">
                <div id="card-cvv" className="field third-width"></div>
                <div className="input-errors" id="card-cvv-errors" role="alert"></div>
              </div>

              <div className="form-row">
                <div id="card-postal-code" className="field third-width"></div>
                <div className="input-errors" id="card-postal-code-errors" role="alert"></div>
              </div>
              <div id="card-response" role="alert"></div>

              <div className="button-container">
                <button>Submit Payment</button>
              </div>

        </form>
    </div>
    </>
  )
}

export default Step3