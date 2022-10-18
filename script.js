const apiKey = "f50f14781afc48d0959123718221510";
let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=yes`;
const rootElement = document.querySelector("#root");
let apiCity = `https://api.weatherapi.com/v1/search.json?key=f50f14781afc48d0959123718221510&q=lon`;
const apiPictures ="563492ad6f91700001000001a0a0adc49e0e4ef19573c6e034c3fcaa";



fetch("https://api.pexels.com/v1/search?query=budapest",{
  headers: {
    Authorization: "563492ad6f91700001000001a0a0adc49e0e4ef19573c6e034c3fcaa"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data)
     let bodyForPic = document.querySelector("body");
     let img = document.createElement("img");
     img.src = data[0].url
     bodyForPic.insertAdjacentHTML("beforeend", `
        ${data.photos[0]}
     `)
   })








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
    .then( response => response.json())
    .then(function (data) {
        console.log(data);
       for (i=0; i<data.length; i++) {
         list += '<option value="' + data[i].name + '">';
       }
       res.innerHTML = '<datalist id="cities">' + list + '</datalist>';
       console.log(list)
       return true;
     }).catch(function (err) {
       console.warn('Something went wrong.', err);
       return false;
     });
  }







let startInput = document.querySelector("#user-input").value;

fetch(apiCity)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    



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
    }else if(userInput === "Rome"){
        body.classList.add("body-class3");
    }else if(userInput === "Madrid"){
        body.classList.add("body-class4");
    }else if(userInput === "Athens"){
        body.classList.add("body-class5");
    }else if(userInput === "Budapest"){
        body.classList.add("body-class6")
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
    }else if(userInput === "Rome"){
        body.classList.add("body-class3");
    }else if(userInput === "Madrid"){
        body.classList.add("body-class4");
    }else if(userInput === "Athens"){
        body.classList.add("body-class5");
    }
  }
})

/* const inputField = document.querySelector("#user-input");


inputField.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
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
        }else if(userInput === "Rome"){
            body.classList.add("body-class3");
        }else if(userInput === "Madrid"){
            body.classList.add("body-class4");
        }else if(userInput === "Athens"){
            body.classList.add("body-class5");
        }else if(userInput === "Budapest"){
            body.classList.add("body-class6")
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
        }else if(userInput === "Rome"){
            body.classList.add("body-class3");
        }else if(userInput === "Madrid"){
            body.classList.add("body-class4");
        }else if(userInput === "Athens"){
            body.classList.add("body-class5");
        }
      }
    }
}); */