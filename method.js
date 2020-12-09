//Deck of cards
//Original Object
const myDeck = {
      deck : [],
      drawnCard : [],
      suits : ['clubs', 'spades', 'heart', 'diamond' ],
      cardsValue :  "2,3,4,5,6,7,8,9,10,J,Q,K,A", 
      initializeDeck(){
        const {suits, cardsValue, deck} = this;
        for(let value of cardsValue.split(',')){
          for(let suit of suits){
            deck.push({
              value, 
              suit});
          }
        } 
        return deck;
      }, 
      drawCard(){
        const dcard = this.deck.pop();
        this.drawnCard.push(dcard);
        return dcard;
      },
      drawMultiple(num){
        const cards = [];
        for(let i = 0; i < num; i++){
          cards.push(this.drawCard());
        }
        return cards;
      },
      shuffle(){
        const {deck} = this;
        for(let i = deck.length - 1; i > 0; i--){
          let j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j],  deck[i]];
        }
        return deck;
      }
    };
    
//Write reusable funcion to create more object base on original object
const makeDeck = () => {
    return  {
          deck : [],
          drawnCard : [],
          suits : ['clubs', 'spades', 'heart', 'diamond' ],
          cardsValue :  "2,3,4,5,6,7,8,9,10,J,Q,K,A", 
          initializeDeck(){
            const {suits, cardsValue, deck} = this;
            for(let value of cardsValue.split(',')){
              for(let suit of suits){
                deck.push({
                  value, 
                  suit});
              }
            } 
            return deck;
          }, 
          drawCard(){
            const dcard = this.deck.pop();
            this.drawnCard.push(dcard);
            return dcard;
          },
          drawMultiple(num){
            const cards = [];
            for(let i = 0; i < num; i++){
              cards.push(this.drawCard());
            }
            return cards;
          },
          shuffle(){
            const {deck} = this;
            for(let i = deck.length - 1; i > 0; i--){
              let j = Math.floor(Math.random() * (i + 1));
              [deck[i], deck[j]] = [deck[j],  deck[i]];
            }
            return deck;
          }
        };
}

const myDeck = makeDeck(); //set to new function
const realDeck = myDeck.initializeDeck(); //initialize all cards
const shuff = myDeck.shuffle(); //store shuffled cards
const p1 = myDeck.drawMultiple(5); //return picked card from shuffled deck

