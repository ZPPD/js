//creating team object with players and games properties,
const team = {
  _players: [
    {firstName:"Pablo",
    lastName:"Sanches",
    age:11},
    
    {firstNmae:"Pete",
    lastName:"Wheeler",
    age:18},
    
    {firstName:"Alfonso",
    lastName:"Sanches",
    age:32}
     ],
  _games: [
    {opponent:"Broncos",
    teamPoints:42,
    opponentPounts:27},
    
    {opponent:"Tigers",
    teamPoints:20,
    opponentPoints:33},
    
    {opponent:"Eagles",
    teamPoints:50,
    opponentPoints:47},
    
    {opponent:"Knicks",
      teamPoints:79,
      opponentPoints:115}
     ],
  //don't need setter methods, because we don't want anyone to change the values saved to these keys
  get players(){
    return this._players;
  },
  
  get games(){
    return this._games;
  },
  
  //add a method addPlayer to the team object
  addPlayer(firstName, lastName, age){
    let player = {
      firstName:firstName,
      lastName:lastName,
      age:age
    };
    this.players.push(player);
  },

//method for recording game results that takes in oppName, myteamPoints, oppPoints, creates a game object, and adds it to my teams games array

/*_games: [{opponent:"Knicks",
         points:79,
         opponentPoints:115}],*/
  addGame(opp,myPts,oppPts){
    let game = {
      opponent: opp,
      teampoints:myPts,
      opponentPoints:oppPts
    };
    this.games.push(game);
  },
  
};

//invoke the addPlayer method on players
team.addPlayer("Bongo","Bagys",44);
team.addPlayer("Bugs","Bunny",76);
console.log(team._players);

//invoke the addGame method and print the teams updated games array
team.addGame("Largo",38,31);
team.addGame("Yonkers", 167, 185);
team.addGame("Axel",59,17);
console.log(team._games);



