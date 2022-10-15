const apiKey = "f50f14781afc48d0959123718221510";
let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=yes`;
const rootElement = document.querySelector("#root");



rootElement.insertAdjacentHTML("beforeend", `
    <label for="user-input">Cities:</label>
    <input list="cities" type="text" id="user-input"></input> 
    <datalist id="cities">
    <option value="London">
    <option value="Paris">
    <option value="Roma">
    <option value="Madrid">
    <option value="Athen">
    </datalist>
    <button class="button">Submit</button>
    <div class="result"></div>
`)

const button = document.querySelector(".button");

const body = document.querySelector("body");

const resultDiv = document.querySelector(".result");
console.log(resultDiv.childNodes.length)

button.addEventListener("click", function(){
    if(resultDiv.childNodes.length !== 0){
        resultDiv.innerHTML = "";
        let userInput = document.querySelector("#user-input").value;
        console.log(userInput);
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=yes`;

    
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => {
        data = responseJson
        console.log(data)
        
        resultDiv.insertAdjacentHTML("beforeend", `

                <h1>${data.location.name}</h1>
                <h2>Temperature: ${data.current.temp_c}°C</h2>
                <p>Wind: ${data.current.wind_kph}km/h</p>
                <p>Humidity: ${data.current.humidity}%</p>
        `)

        
    })
    
    if(userInput === "London"){
        body.classList.add("body-class1");
    }else if(userInput === "Paris"){
        body.classList.add("body-class2");
    }else if(userInput === "Roma"){
        body.classList.add("body-class3");
    }else if(userInput === "Madrid"){
        body.classList.add("body-class4");
    }else if(userInput === "Athen"){
        body.classList.add("body-class5");
    }
    }else{

    
    let userInput = document.querySelector("#user-input").value;
    console.log(userInput);
    apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=yes`;

    
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => {
        data = responseJson
        console.log(data)
        
        resultDiv.insertAdjacentHTML("beforeend", `

                <h1>${data.location.name}</h1>
                <h2>Temperature: ${data.current.temp_c}°C</h2>
                <p>Wind: ${data.current.wind_kph}km/h</p>
                <p>Humidity: ${data.current.humidity}%</p>
        `)

        
    })
    
    if(userInput === "London"){
        body.classList.add("body-class1");
    }else if(userInput === "Paris"){
        body.classList.add("body-class2");
    }else if(userInput === "Roma"){
        body.classList.add("body-class3");
    }else if(userInput === "Madrid"){
        body.classList.add("body-class4");
    }else if(userInput === "Athen"){
        body.classList.add("body-class5");
    }
  }
})