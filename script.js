document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let imgSrc;
  let result;
  let mondayScore;
  let albumScore;
  let warmScore;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

  let userMonday = q1.value.toLowerCase();
  let userAlbum = q2.value.toLowerCase();
  let userWarm = q3.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

  if (userMonday === "hate") 
  {
    mondayScore = 1;
  }
    else if (userMonday === "awesome")
    {
      mondayScore = 2;
    }
    else if (userMonday === "eh")
    {
      mondayScore = 3;
    }
    else
    {
      mondayScore = 0;
    }


    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

  if (userAlbum === "meowsic")
  {
    albumScore = 1;
  }
    else if (userAlbum === "issues")
    {
      albumScore = 2;
    }
    else if (userAlbum === "explosion")
    {
      albumScore = 3;
    }
    else
    {
      albumScore = 0;
    }



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

  if (userWarm === "blanket")
  {
    warmScore = 1;
  }
    else if (userWarm === "torch")
    {
      warmScore = 2;
    }
    else if (userWarm === "hug")
    {
      warmScore = 3;
    }
    else 
    {
      warmScore = 0;
    }



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

let totalScore = warmScore + albumScore + mondayScore;
    

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

if (totalScore > 8) 
{
  result = 'Black Cat';
  imgSrc = "images/black cat.jpg";
 displayResult.innerHTML = `<h2>You certainly are a ${result}!</h2></br><img src="${imgSrc}">`;
} 
else if (totalScore > 4 && totalScore <= 7) 
{
      result = "Ginger Taby Cat";
      imgSrc = "images/taby cat.jpeg"
      displayResult.innerHTML = `<h2>You certainly are a ${result}!</h2></br><img src="${imgSrc}">`;
} 
else if (totalScore >= 1 && totalScore <= 4) 
{
      result = "Siamese";
      imgSrc = "images/siamese-cat-on-guard-pixabay-760x486.jpg";
      displayResult.innerHTML = `<h2>You certainly are a ${result}!</h2></br><img src="${imgSrc}">`;
} 
else 
{
      displayResult.innerHTML = `<h2>I don't think you answered all the questions or answered them properly. Try again! : ></h2>`;
}

  };
}