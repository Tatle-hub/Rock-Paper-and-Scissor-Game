//Player 1
var rndmPict1 = Math.floor(Math.random() * 3) + 1;

var rndmImg1 = "rsp" + rndmPict1 + ".jpg"

var rndmImgsrc1 = "images/" + rndmImg1;

var img1 = document.querySelector('.img1');

img1.setAttribute('src', rndmImgsrc1);


//Player 2
var rndmPict2 = Math.floor(Math.random() * 3) + 1;

var rndmImg2 = "rsp" + rndmPict2 + ".jpg"

var rndmImgsrc2 = "images/" + rndmImg2;

var img2 = document.querySelector('.img2');

img2.setAttribute('src', rndmImgsrc2);

//1-ROCK 2-PAPER 3-SCISSOR

//1st make an variable for the Game On!
var name1 = document.querySelector('h1');
var player1 = document.querySelector('.p1');
var player2 = document.querySelector('.p2');

//Try Again!
if (rndmPict1 == 1 & rndmPict2 == 1 | rndmPict1 == 2 & rndmPict2 == 2 | rndmPict1 == 3 & rndmPict2 == 3)	{
		 name1.textContent = 'Try Again!'
	};

//Wins
if (rndmPict1 == 2 & rndmPict2 == 1 | rndmPict1 == 1 & rndmPict2 == 2 )	{
		 name1.textContent = 'Paper Wins!'
	};
if (rndmPict1 == 3 & rndmPict2 == 1 | rndmPict1 == 1 & rndmPict2 == 3 )	{
		 name1.textContent = 'Rock Wins!'
	};
if (rndmPict1 == 2 & rndmPict2 == 3 | rndmPict1 == 3 & rndmPict2 == 2 )	{
		 name1.textContent = 'Scissor Wins!'
	};

//player wins n loss
if (rndmPict1 == 2 & rndmPict2 == 1 | rndmPict1 == 1 & rndmPict2 == 3 | rndmPict1 == 3 & rndmPict2 == 2) {
	player1.innerHTML = '&#11093; <b>Player 1 Wins</b>'
};

if (rndmPict2 == 2 & rndmPict1 == 1 | rndmPict1 == 3 & rndmPict2 == 1 | rndmPict1 == 2 & rndmPict2 == 3) {
	player2.innerHTML = '&#11093; <b>Player 2 Wins</b>'
};

if (rndmPict1 == 1 & rndmPict2 == 2 | rndmPict1 == 3 & rndmPict2 == 1 | rndmPict1 == 2 & rndmPict2 == 3) {
	player1.innerHTML = '&#10060; <strike>Player 1</strike>'
}

if (rndmPict1 == 2 & rndmPict2 == 1 | rndmPict1 == 1 & rndmPict2 == 3 | rndmPict1 == 3 & rndmPict2 == 2) {
	player2.innerHTML = '&#10060; <strike>Player 2</strike>'
}


//moving image n txt
document.querySelector('.container').align = 'center'
document.querySelector('h1').style.marginBottom = '50px';
document.querySelector('.img2').style.marginLeft = '300px';
document.querySelector('.img1').style.marginRight = '300px';
document.querySelector('.p2').style.marginTop = '-240px';
document.querySelector('.p1').style.marginRight = '300px';
document.querySelector('.p2').style.marginLeft = '300px';
//image size
document.querySelector('.img1').style.height = '200px';
document.querySelector('.img2').style.height = '200px';
//Rotate image
document.querySelector('.img1').style.transform = "rotate(80deg)";
document.querySelector('.img2').style.transform = "rotate(280deg)";
//fontstyle n fontsize
name1.style.fontSize = '70px';
player1.style.fontSize = '20px';
player2.style.fontSize = '20px';