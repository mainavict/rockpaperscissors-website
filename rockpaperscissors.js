let playerschoice = '';
    let computerchoice= '';
    let result= '';
    let wins= 0;
    let  loses= 0;
    let ties=0;

    let results = JSON.parse(localStorage.getItem('results')) || { wins: 0, loses: 0, ties: 0 };
    function computerpicknum(){
      randomnumber = Math.round((Math.random())*(30-1)+1)
      if  (randomnumber <=10) {
        computerchoice =  'Rock'
      }

      if  (randomnumber >10  && randomnumber <=20) {
        computerchoice =  'Paper'
      }

      if  (randomnumber <=30  && randomnumber >20) {
        computerchoice =  'Scissors'
      }

      return (computerchoice)
    }
    function Rock()
    {
      computerchoice= computerpicknum();
      playerschoice = 'Rock';
      
      console.log(` you choose: ${playerschoice} computer choose: ${computerchoice}`);
      compair(playerschoice,computerchoice);
      display();
      
    }
    function Paper()
    {
      computerchoice= computerpicknum();
      playerschoice = 'Paper';
      console.log(` you choose: ${playerschoice} computer choose: ${computerchoice}`);
      compair(playerschoice,computerchoice);
      display();
    }

    function Scissors()
    {
      computerchoice= computerpicknum();
      playerschoice = 'Scissors';
      console.log(` you choose: ${playerschoice} computer choose: ${computerchoice}`);
      compair(playerschoice,computerchoice);
      display();
    }


    function compair(playerschoice,computerchoice){
      if (playerschoice == computerchoice)
      {
        result= 'you tie' 
        console.log(`${result}`);
        results.ties = results.ties+1;
      }
      else if (playerschoice == 'Rock' && computerchoice == 'Paper')
      {
        result = 'you lose'
        console.log(`${result}`);
        results.loses = results.loses+1;
      }
      else if (playerschoice == 'Rock' && computerchoice == 'Scissors')
      {
        result = 'you win'
        console.log(`${result}`);
        results.wins = results.wins+1;
      }
      else if (playerschoice == 'Paper' && computerchoice == 'Rock')
      {
        result = 'you win'
        console.log(`${result}`);
        results.wins = results.wins+1;
      }
      else if (playerschoice == 'Paper' && computerchoice == 'Scissors')
      {
        result = 'you lose'
        console.log(`${result}`);
        results.loses = results.loses+1;
      }

      else if (playerschoice == 'Scissors' && computerchoice == 'Rock')
      {
        result = 'you lose'
        console.log(`${result}`);
        results.loses = results.loses+1;
      }
      else if (playerschoice == 'Scissors' && computerchoice == 'Paper')
      {
        result = 'you win'
        console.log(`${result}`);
        results.wins = results.wins+1;


      }
      console.log(`wins: ${results.wins}  loses: ${results.loses} ties: ${results.ties}`)
      localStorage.setItem('results', JSON.stringify(results))
    }
    

    function reset(){
      results.wins =  0;
      results.loses = 0;
      results.ties = 0;
      localStorage.setItem('results', JSON.stringify(results))
       document.querySelector('.js-result').innerHTML= `score reset`
       document.querySelector('.js-choices').innerHTML= ` `
      document.querySelector('.js-scores').innerHTML= `wins: ${results.wins}  loses: ${results.loses} ties: ${results.ties}`

    }

    function save()
    {
      localStorage.setItem('results', JSON.stringify(results))
    }

    function display(){

      document.querySelector('.js-result').innerHTML= `${result}`
      document.querySelector('.js-scores').innerHTML= `wins: ${results.wins}  loses: ${results.loses} ties: ${results.ties}`
      document.querySelector('.js-choices').innerHTML= `You:<img src="images/${playerschoice}.jpg" class="icons">  computer: <img src="images/${computerchoice}.jpg" class="icons">`
      
      
    }


    let isAutoPlaysing= false;
    let intervalid;
    function autoplay(){
      if (!isAutoPlaysing){
       intervalid =setInterval(function(){
        playerschoice = computerpicknum();
        computerchoice= computerpicknum();
        compair(playerschoice, computerchoice);
        console.log(playerschoice,computerchoice)
        display();
        save();
        console.log(isAutoPlaysing);
        },1000);
        console.log(isAutoPlaysing);
        isAutoPlaysing = true;
        console.log(isAutoPlaysing);
      }
      else {
        clearInterval(intervalid);
        console.log(isAutoPlaysing);
        isAutoPlaysing = false;
        console.log(isAutoPlaysing);
      }
      
    }
