let icons = ['❤️','🤣','☂️','🌞','👌','🥶','😈','👽','☠️'];

let lock_board  = false;

let cards = [...icons , ...icons];

let flipped_cards = [];
let flipped_cards2 = [];


let cards_length = cards.length - 1;

let temp = null ;



for (let i = 0; i < cards.length; i++) {
    
let r = Math.floor(Math.random()* cards_length);

  temp = cards[i];

  cards[i] = cards[r];

  cards[r] = temp ;

  
  

    
}


let first_card = null;
let second_card = null ;
let clicks = 0;

let f = 0;


cards.forEach(cards_container  => {

    var container  = document.getElementById('cards_container');

    var card = document.createElement('div');

     card.classList.add('cards');

    

    container.appendChild(card);

   

  

      card.addEventListener('click',()=>{

     

        if (!lock_board ) {

        click_sound();
        card.classList.add('flipped');

        card.dataset.content = cards_container;
        card.dataset.index = f;
        f++;
        
        
        card.textContent=cards_container;
      

        flipped_cards.push(cards_container);
        flipped_cards2.push(card);

        let [card1, card2 ] = flipped_cards;

        if (flipped_cards.length == 2 ) {

          lock_board = true;
         
     
          checkmatch();

          flipped_cards = [];
         
          
        }

        

      }
        
    })
      
    

   
});



  let score = 0;


function checkmatch() {

  lock_board = true;

  let [card1, card2 ] = flipped_cards;
  let [c1, c2 ] = flipped_cards2;


  
  

  if (c1.dataset.content == c2.dataset.content && c1.dataset.index != c2.dataset.index) {
  
    
    setTimeout(() => {
      score++;
      lock_board = false;
      flipped_cards2 = [];
    }, 1000);
    
    
  }else{
   
   
   
    setTimeout(() => {
          
    flipped_cards2.forEach(element => {
      element.innerHTML ="";
      element.dataset.content ='' ;
      element.classList.remove('flipped');
      lock_board = false;
      flipped_cards2 = [];
    });


    }, 1000);

    
    
  }

 }



   

setInterval(() => {
  
  if (score == 9) {
    setTimeout(() => {
      alert('YOU WON !!!');
    }, 2500);
    score = 0;
    victory_sound2();

    setTimeout(() => {
      victory_sound();
    }, 2000);

  
    
  }
}, 100);

function click_sound() {
  var sound = document.getElementById('mySound2');
  sound.play();
}


function victory_sound() {
  var sound = document.getElementById('mySound');
  sound.volume = 1.0;
  sound.play();
}

function victory_sound2() {
  var sound = document.getElementById('mySound3');
  sound.play();
}