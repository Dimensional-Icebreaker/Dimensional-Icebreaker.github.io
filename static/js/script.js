console.log("JavaScript loaded and running"); // for debugging

function showPopup(project) {
    const overlay = document.getElementById("popup-overlay");
    const appLink = document.getElementById("popup-app-link");
    const githubLink = document.getElementById("popup-github-link");

    if (project === "Friend Zones") {
        appLink.href = "https://zonedeck.onrender.com";
        githubLink.href = "https://github.com/Dimensional-Icebreaker/FriendZone";
        appLink.innerText = "Go Ahead";
        githubLink.innerText = "View GitHub Code Repository";
    } 

    overlay.style.display = "flex"; // Show the overlay and pop-up
}

function hidePopup() {
    const overlay = document.getElementById("popup-overlay");
    overlay.style.display = "none"; // Hide the overlay and pop-up
}


const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert("All fields are required!");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

const quotes = [
    { text: "Reality is merely an illusion, albeit a very persistent one.", author: "Albert Einstein" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.", author: "Fyodor Dostoevsky" },
    { text: "Some people feel the rain. Others just get wet.", author: "Bob Marley" },
    { text: "To go wrong in one's own way is better than to go right in someone else's.", author: "Fyodor Dostoevsky" },
    { text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", author: "Albert Einstein" },
    { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
    { text: "The cosmos is within us. We are made of star-stuff.", author: "Carl Sagan" },
    { text: "It is not what you look at that matters, it’s what you see.", author: "Henry David Thoreau" },
    { text: "Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don't say that you've wasted time.", author: "Fyodor Dostoevsky" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "There is no greatness where there is no simplicity, goodness, and truth.", author: "Leo Tolstoy" },
    { text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard" },
    { text: "There is only one thing that makes a dream impossible to achieve: the fear of failure.", author: "Paulo Coelho" },
    { text: "What is essential is invisible to the eye.", author: "Antoine de Saint-Exupéry" },
    { text: "The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.", author: "Carl Sagan" },
    { text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", author: "Isaac Asimov" },
    { text: "Some of the most beautiful things worth having in your life come wrapped in a crown of thorns.", author: "Shannon L. Alder" },
    { text: "And those who were seen dancing were thought to be insane by those who could not hear the music.", author: "Friedrich Nietzsche" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" }
];

// JavaScript function to display a random quote
async function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').innerText = randomQuote.text;
    document.getElementById('quote-author').innerText = `— ${randomQuote.author}`;
}

// Call displayRandomQuote on page load

async function fetchWeather() {
    const apiKey = 'c7c870ecb47562c17b698237053b2f38';
    const city = 'New Jersey';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weather = await response.json();
        const tempCelsius = Math.round(weather.main.temp); // Format temperature as integer
        document.getElementById('weather-location').innerText = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('weather-description').innerText = weather.weather[0].description;
        document.getElementById('weather-temperature').innerText = `Temperature: ${tempCelsius}C`; 
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    displayRandomQuote();
});
