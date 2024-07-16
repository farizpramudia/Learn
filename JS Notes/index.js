const countLabel = document.getElementById(`countLabel`);

const increaseButton = document.getElementById(`increaseButton`);
const decreaseButton = document.getElementById(`decreaseButton`);
const resetButton = document.getElementById(`resetButton`);

let count = 0;

increaseButton.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseButton.onclick = function () {
  count--;
  if (count <= 0) {
    count = 0;
  }
  countLabel.textContent = count;
};
resetButton.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

const tempNum = document.getElementById(`tempNum`);
const tFrom = document.getElementById(`tFrom`);
const tTo = document.getElementById(`tTo`);
const tAnswer = document.getElementById(`tAnswer`);
const rumus = document.getElementById(`rumus`);
let temp;

function convert() {
  let tB = tFrom.value;
  let tA = tTo.value;
  let tNum = tempNum.value;
  console.log(tB);
  temp = Number(tempNum.value);
  if (tB == "celcius" && tA == "celcius") {
    temp = temp;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `${tNum}°C = ${temp}°C`;
  } else if (tB == "celcius" && tA == "fahrenheit") {
    temp = temp * (9 / 5) + 32;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `(${tNum}°C × 9/5) + 32 =${temp}°F`;
  } else if (tB == "celcius" && tA == "kelvin") {
    temp = temp + 273.15;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `${tNum}°C + 273.15 = ${temp}K`;
  } else if (tB == "fahrenheit" && tA == "celcius") {
    temp = (temp - 32) * (5 / 9);
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `(${tNum}°F − 32) × 5/9 = ${temp}°C`;
  } else if (tB == "fahrenheit" && tA == "kelvin") {
    temp = (temp - 32) * (5 / 9) + 273.15;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `(${tNum}°F − 32) × 5/9 + 273.15 = ${temp}K`;
  } else if (tB == "fahrenheit" && tA == "fahrenheit") {
    temp = temp;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `${tNum}°F = ${temp}°F`;
  } else if (tB == "kelvin" && tA == "kelvin") {
    temp = temp;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `${tNum}K = ${temp}K`;
  } else if (tB == "kelvin" && tA == "celcius") {
    temp = temp - 273.15;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `${tNum}K − 273.15 = ${temp}°C`;
  } else if (tB == "kelvin" && tA == "fahrenheit") {
    temp = (temp - 273.15) * (9 / 5) + 32;
    tAnswer.textContent = temp.toFixed(3);
    rumus.textContent = `(${tNum}K − 273.15) × 9/5 + 32 = {tempNum}°F`;
  }
}

function rollDice() {
  let numOfDice = document.getElementById(`numOfDice`).value;
  const diceResult = document.getElementById(`diceResult`);
  const diceError = document.getElementById("diceError");
  const diceImg = document.getElementById(`diceImg`);
  const values = [];
  const images = [];

  if (numOfDice > 6) {
    numOfDice = 6;
    diceError.textContent = `cant roll more than 6!\n`;
  } else if (numOfDice < 1) {
    numOfDice = 1;
  } else {
    diceError.textContent = "";
  }

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    values.push(value);
    images.push(`<img src="dice/${value}.jpg" alt="Dice ${value}">`);
  }
  diceResult.textContent = `Result: ${values.join(`, `)}`;
  diceImg.innerHTML = images.join(` `);
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function pause() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, 0);
  minutes = String(minutes).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);
  miliseconds = String(miliseconds).padStart(2, 0);

  display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

const calculator = document.getElementById("calculator");

function appendtoDisplay(input) {
  calculator.value += input;
}

function clearDisplay() {
  calculator.value = "";
}
function calculate() {
  try {
    calculator.value = eval(calculator.value);
  } catch (error) {
    calculator.value = "ERROR";
  }
}

const choices = ["kertas", "gunting", "batu"];
const suitPlayer = document.getElementById("suitPlayer");
const suitComp = document.getElementById("suitComp");
const suitResult = document.getElementById("suitResult");
const playerScore = document.getElementById(`playerScore`);
const cpuScore = document.getElementById(`cpuScore`);
let score0 = 0;
let score1 = 0;

function suit(pilihanPlayer) {
  let pilihanComp = choices[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
  let result = "";
  if (pilihanPlayer === pilihanComp) {
    result = "SERI!";
  } else {
    switch (pilihanPlayer) {
      case "kertas":
        result = pilihanComp === "gunting" ? "KALAH" : "MENANG";
        break;
      case "gunting":
        result = pilihanComp === "batu" ? "KALAH" : "MENANG";
        break;
      case "batu":
        result = pilihanComp === "kertas" ? "KALAH" : "MENANG";
        break;
    }
  }
  pilihanPlayer =
    pilihanPlayer.charAt(0).toUpperCase() + pilihanPlayer.slice(1);
  pilihanComp = pilihanComp.charAt(0).toUpperCase() + pilihanComp.slice(1);
  suitPlayer.textContent = `Player : ${pilihanPlayer}`;
  suitComp.textContent = `Computer : ${pilihanComp}`;
  suitResult.textContent = result;
  suitResult.classList.remove("greenText", "redText");

  switch (result) {
    case "MENANG":
      suitResult.classList.add("greenText");
      score0++;
      playerScore.textContent = score0;
      break;
    case "KALAH":
      suitResult.classList.add("redText");
      score1++;
      cpuScore.textContent = score1;
      break;
  }
}

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokemonImage = document.getElementById("pokemonImage");

    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = "block";
  } catch {
    console.error(error);
  }
}

function clickPress(event) {
  if (event.keyCode == 13) {
    fetchData();
  }
}

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherCard = document.querySelector(".weatherCard");
const apiKey = "9e302dfac6796e3a317dc4afdb203eef";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherinfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a City");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("City not Found");
  } else {
    return await response.json();
  }
}

function displayWeatherinfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  weatherCard.textContent = "";
  weatherCard.style.display = "flex";

  const cityDisplay = document.createElement("h2");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  weatherCard.appendChild(cityDisplay);
  weatherCard.appendChild(tempDisplay);
  weatherCard.appendChild(humidityDisplay);
  weatherCard.appendChild(descDisplay);
  weatherCard.appendChild(weatherEmoji);

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  weatherEmoji.classList.add("weatherEmoji");
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId > 800 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  weatherCard.style.display = "flex";
  weatherCard.TextContent = " ";
  weatherCard.appendChild(errorDisplay);
}
