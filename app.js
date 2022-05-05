const foods = ["Apple", "Banana", "Mango", "Orange"];
const players = [];
const questions = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];
const pairArray = [];

const player1 = {name: "Ali", food: ""};
players.push(player1);
const player2 = {name: "Sam", food: ""};
players.push(player2);
const player3 = {name: "Richard", food: ""};
players.push(player3);
const player4 = {name: "Anas", food: ""};
players.push(player4);
const player5 = {name: "Leah", food: ""};
players.push(player5);
const player6 = {name: "Mason", food: ""};
players.push(player6);


randomFood();
randomImposter();
pairs();
findImposter();
console.log(players);

function randomFood()
{
    var foodItem = foods[Math.floor(Math.random() * foods.length)]; 
    
    for(i=0; i<players.length; i++)
    {
        players[i].food = foodItem;
    }
}

function randomImposter()
{
    var imp = players[Math.floor(Math.random() * players.length)];
    imp.food = "Imposter";
    return imp;
}

function pairs()
{
    for(i=0; i<players.length; i++)
    {
        if(players[i+1] != null)
        {
        console.log(players[i].name + " Ask " +  players[i+1].name + " Question: " + randomQuestion());
        }
        else
        {
            console.log(players[i].name + " Ask " +  players[0].name + " Question: " + randomQuestion());
        }
    }
}

function randomQuestion()
{
    return questions[Math.floor(Math.random() * questions.length)];
}

function findImposter()
{
    for(i=0; i<players.length; i++)
    {
        if (players[i].food != "Imposter")
        {
            console.log("yes");
        }
        else
        {
            console.log("imposter");
        }
    }
}