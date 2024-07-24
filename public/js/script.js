
const getAsyncBtn = document.getElementById("getAsync");
getAsyncBtn.addEventListener('click', getDataAsync);

const dataURL = 'http://localhost:3000/animedata';

async function getDataAsync() {
    const response = await fetch(dataURL);
    const data = await response.json();
    // console.log(data); 

   let inputValue = document.getElementById("inputValue").value.toLowerCase();
    let ulContent = "<ul>";
    for (const element of data) {
        if(element.title.toLowerCase().includes(inputValue)){
            ulContent += `
            
                    <strong>Title:</strong> ${element.title} <br>
                    <strong>Genre:</strong> ${element.genre} <br>
                    <strong>Year:</strong> ${element.year} <br>
                    <strong>Director:</strong> ${element.director} <br>
                    <strong>Cast:</strong> ${element.cast.join(", ")}
           
                <hr>
            `;
        }

      
    }
    ulContent += "</ul>";

    document.getElementById("data").innerHTML = ulContent;
}
