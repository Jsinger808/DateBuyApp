import React, {Component} from 'react'
import App from '../App'

type CounterProps = {
  color: string,
  address: string | undefined,
  time: string | undefined;
}


export const CurrentBuyerInfo = ({ color, address, time}: CounterProps) => {
  return (
    <div>
         <br/>Previous Buyer: {color}
          <br/>Timestamp: {time}
           <br/>Location: {address}
        </div>
  )
}
  