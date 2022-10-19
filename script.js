const apiKey = "f50f14781afc48d0959123718221510";
let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=yes`;
const rootElement = document.querySelector("#root");
let apiCity = `https://api.weatherapi.com/v1/search.json?key=f50f14781afc48d0959123718221510&q=lon`;
const apiPictures = "563492ad6f91700001000001a0a0adc49e0e4ef19573c6e034c3fcaa";



rootElement.insertAdjacentHTML("beforeend", `
    <form autocomplete="off">
    <label for="user-input">Cities:</label>
    <input list="cities" type="text" id="user-input" onKeyUp="showResults(this.value)"></input>
    <div id="result"></div>
    </form> 
   
    <button class="button">Submit</button>
    <div class="result"></div>
`);

function showResults(val) {
    res = document.querySelector("#result");
    res.innerHTML = '';
    if (val == '') {
        return;
    }
    let list = '';
    fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=` + val)
        .then(response => response.json())
        .then(function (data) {
            for (i = 0; i < data.length; i++) {
                list += '<option value="' + data[i].name + '">';
            }
            res.innerHTML = '<datalist id="cities">' + list + '</datalist>';
            return true;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
            return false;
        });
}

const button = document.querySelector(".button");

const body = document.querySelector("body");

const resultDiv = document.querySelector(".result");

button.addEventListener("click", function () {
    if (resultDiv.childNodes.length !== 0) {
        resultDiv.innerHTML = "";
        let userInput = document.querySelector("#user-input").value;
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=yes`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(responseJson => {
                data = responseJson

                resultDiv.insertAdjacentHTML("beforeend", `

                <h1>${data.location.name}</h1>
                <h2>Temperature: ${data.current.temp_c}°C</h2>
                <p>Wind: ${data.current.wind_kph}km/h</p>
                <p>Humidity: ${data.current.humidity}%</p>
        `)


            })
        fetch(`https://api.pexels.com/v1/search?query=${userInput}`, {
            headers: {
                Authorization: "563492ad6f91700001000001a0a0adc49e0e4ef19573c6e034c3fcaa"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let bodyForPic = document.querySelector("body");
                bodyForPic.style.backgroundImage = `url(${data.photos[0].src.original})`
            })

    } else {


        let userInput = document.querySelector("#user-input").value;
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=yes`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(responseJson => {
                data = responseJson

                resultDiv.insertAdjacentHTML("beforeend", `

                <h1>${data.location.name}</h1>
                <h2>Temperature: ${data.current.temp_c}°C</h2>
                <p>Wind: ${data.current.wind_kph}km/h</p>
                <p>Humidity: ${data.current.humidity}%</p>
        `)


            })
        fetch(`https://api.pexels.com/v1/search?query=${userInput}`, {
            headers: {
                Authorization: "563492ad6f91700001000001a0a0adc49e0e4ef19573c6e034c3fcaa"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let bodyForPic = document.querySelector("body");
                bodyForPic.style.backgroundImage = `url(${data.photos[0].src.original})`
            })

    }
})