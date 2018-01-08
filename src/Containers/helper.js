import React from 'react';

export const coinPrimary = ["BTC", "ETH"]
export const coinSecondary = ["BTC", "ETH", "XRP", "DOGE", "STR", "LSK", "LTC"]
export const coinPrime = coinPrimary.map((coin, index) => {
  return <option key={`select - ${index}`}> {coin}</option>
})
export const coinSecond = coinSecondary.map((coin, index) => {
  return <option key={`select - ${index}`}> {coin}</option>
})