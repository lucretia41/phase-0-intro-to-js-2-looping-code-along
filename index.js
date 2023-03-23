function writeCards(namesArray, event) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;

  }
  console.log(startingNumber);

}

// so redid the assignment for the fullstack phase one, it still gives me some issues with string interpretation, need to focus on that and keep it straight in my head so maybe just write it out then simplify and show the logic of it. also was confused at first with numbers, forgot to check the tests to see what i needed, so spent too much time trying to figure it out, also did with names array but realised the mistake, doomed to repeat myself and did.






































// function writeCards( namesArray, event ){
   // let thankYouCards = []
    //for ( let i = 0; i < namesArray.length; i++ ){
     // thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )

   // }
   // return thankYouCards
  //}

  //function countDown(startingNumber ) {
   // while ( startingNumber > 0 ) {
    //  console.log( startingNumber );
     // startingNumber -= 1;

   // }
   // console.log( startingNumber );

 // }
