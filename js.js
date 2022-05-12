var createCandidate = function(name, color) {
var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.tally = function(){
     
    this.totalVotes = 0
    for (var i = 0; i < this.electionResults.length; i++){
      
      this.totalVotes += this.electionResults[i];
    };
    }
politician.color = color;

    return politician;
};

 
//assign name   //give party color

var candidateA = createCandidate ('Erin', [132, 17, 11],);
var candidateB = createCandidate ('Sara', [245, 141, 136]);





//assign arrays to each candidate object instance.
candidateA.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidateB.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//console.log(candidateA.electionResults);
//console.log(candidateB.electionResults);


//fix mistakes in arrays

candidateA.electionResults[9]= 1;
candidateA.electionResults[4]= 17;
candidateA.electionResults[43]= 11;
candidateA.electionResults[43]= 11;

//console.log(candidateA.electionResults);

candidateB.electionResults[9]= 28;
candidateB.electionResults[4]= 38;
candidateB.electionResults[43]= 27;


//console.log(candidateA);
//console.log(candidateB);

//winner of each state
var setStateResults = function(state){
  
     theStates[state].winner = null;
  
  if (candidateA.electionResults[state] > candidateB.electionResults[state])
    
  { theStates[state].winner = candidateA;}
  
  else if (candidateB.electionResults[state] > candidateA.electionResults[state])       
      
  { theStates[state].winner = candidateB;}
  
  
  
  //connect state to winner's color  
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null) 
  
  {theStates[state].rgbColor = stateWinner.color;}
  
  else 
  
  {theStates[state].rgbColor = [11, 32, 57];}
  
  /*dynamic table displaying winner for each state, using DOM to connect the html table to Javascript*/

var stateResults = document.getElementById('stateResults');

var header = stateResults.children[0].children[0];
var rowOne = stateResults.children[1].children[0];
var rowTwo = stateResults.children[1].children[1];
var rowThree = stateResults.children[1].children[2];

header.children[0].innerText = theStates[state].nameFull;
header.children[1].innerText = theStates[state].nameAbbrev;

rowOne.children[0].innerText = candidateA.name;
rowOne.children[1].innerText = candidateA.electionResults[state];

rowTwo.children[0].innerText = candidateB.name;
rowTwo.children[1].innerText = candidateB.electionResults[state];

rowThree.children[0].innerText = 'WINNER:';

 
  if (theStates[state].winner === null) {
    rowThree.children[1].innerText = 'Draw';}

else { rowThree.children[1].innerText = theStates[state].winner.name;}

};





//declare the overall winner using if/else statement
candidateA.tally();
console.log(candidateA.totalVotes);

candidateB.tally();
console.log(candidateB.totalVotes);

var winner;

if (candidateA.totalVotes > candidateB.totalVotes){
  
       winner = candidateA.name;
}

else if (candidateB.totalVotes > candidateA.totalVotes){
  
    winner = candidateB.name
}

else { winner = "It is a Draw.";}

console.log ("The winner is...." + winner + " !!!!")


//connect tables using DOM

var countryResults = document.getElementById('countryResults');

var row = countryResults.children[0].children[0];

row.children[0].innerText = candidateA.name;
row.children[1].innerText = candidateA.totalVotes;

row.children[2].innerText = candidateB.name;
row.children[3].innerText = candidateB.totalVotes;

row.children[4].innerText = 'Winner';
row.children[5].innerText = winner;

//console.log(countryResults)
//console.log(candidateB.electionResults);
