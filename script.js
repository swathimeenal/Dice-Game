function rolldice1()
{
    const diceImage= document.querySelector('.dice-image');
    const score = document.getElementById("Score-1");
    const result = Math.floor(Math.random()*6)+1;
    diceImage.src=`./Images/dice${result}.png`;
    score.textContent = +score.textContent + result;
    document.getElementById("myBtn1").disabled=true; 
    document.getElementById("myBtn2").disabled=false; 
    document.getElementById("Player").innerHTML="Player 2 - To Play";

    if((+score.textContent)==30||(+score.textContent)>30)
    {
        document.getElementById("heading-text").innerHTML="Congratulations!! Player 1 Won the Game";
        document.getElementById("myBtn1").disabled=true; 
        document.getElementById("myBtn2").disabled=true; 
    }
}
function rolldice2()
{
    const diceImage= document.querySelector('.dice-image');
    const score = document.getElementById("Score-2");
    const result = Math.floor(Math.random()*6)+1;
    diceImage.src=`./Images/dice${result}.png`;
    score.textContent = +score.textContent + result;
    document.getElementById("myBtn1").disabled=false; 
    document.getElementById("myBtn2").disabled=true; 
    document.getElementById("Player").innerHTML="Player 1 - To Play";

    if((+score.textContent)==30||(+score.textContent)>30)
    {
        document.getElementById("heading-text").innerHTML="Congratulations!! Player 2 Won the Game";
        document.getElementById("myBtn1").disabled=true; 
        document.getElementById("myBtn2").disabled=true; 
    }
}
function reset()
{
    document.getElementById("myBtn1").disabled=true; 
    document.getElementById("myBtn2").disabled=true;
    document.getElementById("Score-1").innerHTML=0;
    document.getElementById("Score-2").innerHTML=0;
    document.getElementById("heading-text").innerHTML="Let's play again";   

}