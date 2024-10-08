// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// query selector variables go here 👇
var posterImages = document.querySelector(".poster-img")
var posterTitles = document.querySelector(".poster-title")
var posterQuotes = document.querySelector(".poster-quote")
var makeOwnPosterButton = document.querySelector(".show-form")
var showSavedPostersButton = document.querySelector(".show-saved")
var showMainPageButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var showRandomPosterButton = document.querySelector(".show-random")
var mainPosterViewSection = document.querySelector(".main-poster")
var OwnPosterFormSection = document.querySelector(".poster-form")
var savedPostersSection = document.querySelector(".saved-posters")
var showRandomPosterButton = document.querySelector(".show-random")

// event listeners go here 👇
window.addEventListener("load", showRandomHomepagePoster)
makeOwnPosterButton.addEventListener("click", formView)
showSavedPostersButton.addEventListener("click", savedPostersView)
showMainPageButton.addEventListener("click", mainPageView)
backToMainButton.addEventListener("click", mainPageView)
showRandomPosterButton.addEventListener("click", showRandomHomepagePoster)

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function showRandomHomepagePoster() {
  posterImages.src = images[getRandomIndex(images)];
  posterTitles.innerText = titles[getRandomIndex(titles)];
  posterQuotes.innerText = quotes[getRandomIndex(quotes)];

  currentPoster = {
    imageURL: posterImages.src,
    title: posterTitles.innerText,
    quote: posterQuotes.innerText
  };
  return currentPoster
}
//In this function above I am using the getRandomIndex function to generate a random poster.
//This function is triggered by the event listener above, when the window is loaded. 

function mainPageView() {
  mainPosterViewSection.classList.remove("hidden")
  savedPostersSection.classList.add("hidden")
  OwnPosterFormSection.classList.add("hidden")
}
//This is the default view in the html file. 
//write event listeners for the function
//write query selectors for the buttons: "nevermind take me back" button and "Back to main" buttons
//show the .main-poster (remove hidden)
//hide the .poster-form view (add hidden)
//hide the .saved-posters view (add hidden)

function formView() {
  OwnPosterFormSection.classList.remove("hidden")
  mainPosterViewSection.classList.add("hidden")
}
//write event listeners for the function
//write query selectors for the button: "Make your own poster" button
//show the .poster-form view (remove hidden)
//hide the .saved-posters view (add hidden)
//hide the .main-poster view (add hidden)

function savedPostersView() {
  savedPostersSection.classList.remove("hidden")
  OwnPosterFormSection.classList.add("hidden")
  mainPosterViewSection.classList.add("hidden")
}
//write event listeners for the function
//write query selectors for the button: for "show saved posters" button
//show the .saved-posters view (remove hidden)
//hide the .poster-form view (add hidden)
//hide the .main-poster view (add hidden)


console.log(savedPosters)