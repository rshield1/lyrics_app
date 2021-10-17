//Variables

const form = document.getElementById("form")
const search = document.getElementById("search")
const result = document.getElementById("result")


//Lyrics Api

const apiURL = "https://api.lyrics.ovh"

// get input value
form.addEventListener("submit", e => {
    e.preventDefault();
    let searchValue = search.value.trim();

    if (!searchValue) {
        alert("Nothing to search. Please add input")
    } else {
        beginSearch(searchValue)
    }
})

// create search function

async function beginSearch(searchValue) {
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();
    console.log(data)
    //dispay the data
    displayData(data);

}

//display search results
function displayData(data) {
    result.innerHTML = `
    <ul class="songs">
        ${data.data.map(song => `
            <li>
                <div>
                    <strong>${song.artist.name}</strong> - ${song.title}
                </div>
                <span data-artist ="${song.artist.name}"
                data-songtitle="${song.title}">Get Lyrics</span>    
            </li>`).join('')}
    <ul>
    `;
}
