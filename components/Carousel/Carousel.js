let carousel = document.querySelector(".carousel");
let buttons = document.querySelectorAll(".button");
let images = document.querySelectorAll(".cImages")
images.forEach(image => image.style.width = "80%")
images[0].style.display = "block";
console.log(buttons);
console.log(images);

buttons.forEach(button => {
    button.addEventListener('click', console.log("Clicked"));
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right button.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
