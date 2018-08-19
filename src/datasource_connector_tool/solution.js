/*
        Datasource.getPrices() returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
        The remote price data can be retrieved from this endpoint https://pastebin.com/raw/KCJm3Kzb
        price.mid() returns the mid-point value between price.buy and price.sell.
        price.quote() returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.
*/

// create another class, create and pass object into the array, return array upon promise


// a new promise
const promise = new Promise(
        (resolve, reject) => { 
            
            // arrayObjects stores all the instantiated Price object, which contains all the dataset
            let arrayObjects = [];
            // a counter
            var i;
            // the dataset provided
            const arrayPrices = [
                [903072, 882068, 5572536, "BTCSGD", "2018-08-08T13:45:47"], 
                [6729, 6455, 5572564, "LTCUSD", "2018-08-08T13:47:06.806"],  
                [51917, 49938, 5572570, "ETHSGD", "2018-08-08T13:47:08.429"], 
                [86939, 83519, 5572567, "BCHSGD", "2018-08-08T13:47:07.356"], 
                [9173, 8815, 5572565, "LTCSGD", "2018-08-08T13:47:06.811"], 
                [666146, 639774, 5572571, "BTCUSD", "2018-08-08T13:47:08.994"],
                [63904, 61212, 5572566, "BCHUSD", "2018-08-08T13:47:07.352"], [38024, 36687, 5572569, "ETHUSD", "2018-08-08T13:47:08.424"]];
            
            // create Price objects and push the objects into the arrayObjects array.
            for (i = 0; i < arrayPrices.length; i++){
                const priceData = new Price(arrayPrices[i]);
                arrayObjects.push(priceData);
                
            }
            
            // return arrayObjects which contains all the Price objects
            return resolve(arrayObjects);
            }
    );


// Price array which allows us to get the mid value using price.mid(), the quote currency using price.quote() and the blockchain currency using pair.
function Price(myArray){   
    this.buy = myArray[0];
    this.sell = myArray[1];
    this.pair = myArray[3];
    
    // add the buy and sell value and half them to get the mid value
    // We need to divide them by 100 to get the value in dollar.
    this.mid = function() {  
        return (((this.buy+this.sell)/2)/100);
    }
    
    this.quote = function() {  
        // extract the substring from the blockchain currency. We only need to extract substring from position 3 to 6 to get the quote currency
        return (this.pair.substring(3,6));
    }
}

// DataSource object which has the getPrices function. The function will return a promise object
function DataSource(){}

// A function prototype for DataSource object
DataSource.prototype.getPrices = function() {
  // return the promise made    
  return promise;
}

// start the script
const startScript = function () {
    // create new DataSource object
    let ds = new DataSource();
    // call the getPrices function
    ds.getPrices()
        // promise object return
        // use the arrow function to pass the array of prices object
        .then(prices => {
            // for each of the element in the prices array
            prices.forEach(price =>{
                // print the needed information
                console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
            });
        }) 
        // if the promise failed.
        .catch(error => {
            console.log(error);
        });
};

// call the startProgram function and run the srcipt.
startScript();