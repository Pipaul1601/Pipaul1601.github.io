// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get input element
const guessInput = document.getElementById('guessInput');

// Get message element
const message = document.getElementById('message');

// Variables for time
let time = 0;
let timer;

// Check the guess
function checkGuess() {
    // Start the timer when the user makes a guess for the first time
    if (!timer) {
        startTimer();
    }

    // Get the value of the input
    const guess = parseInt(guessInput.value);

    // Check if the guess is correct
    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        message.style.color = 'green';
        guessInput.disabled = true;
        stopTimer();
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }

    // Clear input
    guessInput.value = '';
}

// Start the timer
function startTimer() {
    timer = setInterval(() => {
        time++;
        console.log(time); // Display time in console (you can remove this line)
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timer);
    console.log('Time:', time); // Display final time in console (you can remove this line)
}
