# AggreCoin

## A Crypto Exchange Orderbook Aggregator

## Warning
This is a work in progress. Wishlist with associated issues below.

## Overview
This is a simple orderbook aggregator built with Victory.js/React-Redux. Instead of consolidating the data into a single chart I attempted to use Victory's area stack to diferentiate between exchange orders. Unfortunately this only works if the "x" values (the prices) are consistant across the stacked data sets. I had considered trying to normalize the pricing data a few different ways either by rounding or filling in gaps with dummy entries, but accounting for all possible coin combinations could quickly become an unmaintainble problem if the app were to scale and add more exchanges. At this point I could scrap the area stack attempt and just do a consolidation since the intention of the app is simply to get a rough idea of where the current market psychology is at for a given coin to coin market.

## Wishlist

 - Add more exchanges, ideally the big players like GDAX or Kraken if possible to get an even better sense of the market. This presents its own problems however due to differences in supported coins and markets from exchange to exchange.
 - Fetch coin markets so the drop down selections are only showing coin markets available on both exchanges
 - Roll my own drop down components.
 - Turn into a PWA or rewrite in react-native
 - Integrate Firebase for a simple user profile to store coin favorites and an opportunity to use react-router
 - Create a minimal/flat user interface design
