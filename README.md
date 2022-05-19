## Crypto Prices - Technical Test

- This is a front-end SPA developed to consume the [API CoinGecko](https://www.coingecko.com/en/api/documentation) using Vue.js.

- Bellow you'll find a description of this code and it's architecture decisions.

- You'll also find an easy explanation on how to run it in your local machine.

- If you want to see the SPA running, simply enter the link: TODO

Feel free to use the application and send me any message about it :)

### About the project

This Single Page Application (SPA) was designed in order to be as simple as a SPA can be. 

You'll find it to have only one route. There you can informations about a crypto like it's name, ticker, logo and price. On the right side of the page you may use the *Historical Price* section to insert a date and time, and the app will return to you the price of the current crypto in this date and time.

Also, at the *Choose your crypto* section is a list of the cryptos you may see informations, simply click any of them and the informations will be automatically atualizated. When changing to another crypto the *Historical Price* section will be automatically atualizated too.

The proposition of this design is to be simple, clean and direct. Any person can use it both on a computer and phone as the page is responsive and works in every size of screen.


### Using it in your local machine

If you want to use this code on your own computer, simply follow the steps:

  1. Clone this repository in your local machine;
  2. Run *npm install* in the folder terminal;
  3. Then, simply use *npm run dev* on the terminal and the app will start using a *http://localhost:3000/* local path.

  Obs.: This guide presumes you have some familiarity with Vue, so I'll not take time explaining every line of code in order to install and run it locally.
