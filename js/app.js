/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var matCountin = document.getElementById('matCount');
matCountin.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
msgCountin = document.getElementById('msgCount');
msgCountin.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
fullNamein = document.getElementById("fullname");
fullNamein.innerHTML = 'Ronald McDonald';
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
agein = document.getElementById('age');
agein.innerHTML = "63 Years Old";
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var divElem = document.createElement('div');
divElem.id = 'job';
divElem.innerHTML = "Clown and Restauranteur";
data.appendChild(divElem);
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var divElem2 = document.createElement('div');
divElem2.id = 'hobbies';
divElem2.innerHTML = "Long romantic walks on the beach, cande light Big Mac dinners, and tormenting the King."
data.appendChild(divElem2);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var divElem3 = document.createElement('div');
divElem3.id = 'location';
divElem3.innerHTML = "Honolulu, HI";
data.appendChild(divElem3);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var divElem4 = document.createElement('div');
divElem4.id = 'wants';
divElem4.innerHTML = 'Looking for a Mrs. McDonald.';
data.appendChild(divElem4);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var pElem = document.createElement('p');
pElem.id = 'pro2';
pElem.innerHTML = 'Lemme eat the burger like groceries.'
profile.appendChild(pElem);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var matchem = document.getElementsByClassName('firstName');
matchem[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var agem = document.getElementsByClassName('otherAge');
agem[0].innerHTML = 48;
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statem = document.getElementsByClassName('status');
statem[0].innerHTML = 'Single Mother';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
matchem[1].innerHTML = 'Peko Chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
agem[1].innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 var imgChange = document.getElementsByClassName('other');
 imgChange[2].src = 'https://www.geek.com/wp-content/uploads/2018/04/spongebobnote1-625x352.png'
 //div with class name of firstName
 matchem[2].innerHTML = 'Spongebob';
 //div with class name of otherAge
 agem[2].innerHTML = 32;
 //div with class name of status
 statem[2].innerHTML = 'Single Fry Cook';
 //div with class anem of Motto
var mottem = document.getElementsByClassName('motto');
mottem[2].innerHTML = 'Welcome to my Krusty Krab';



