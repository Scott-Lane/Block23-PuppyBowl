const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');
const imgContainer = newPlayerFormContainer.querySelector("img");
const playerName = document.getElementById("name");
const playerBreed = document.getElementById("breed");
const playerStatus = document.getElementById("status");
const playerTeamId = document.getElementById("teamId");
const playerCohorId = document.getElementById("cohortId");
const allPlayers = document.getElementById("all-players-container");

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2308-FTB-MT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

function setImgSrcAndAlt (imgEL, imgSrc, imgAlt){
    imgEL.src = imgSrc;
    imgEL.alt = imgAlt;
}

function createBasicInfoUI(players){
    playerName.innerText = `Name: ${players.name}`;
    playerBreed.innerText = `Breed: ${players.breed}`;
    playerStatus.innerText = `Status: ${players.status}`;
    playerTeamId.innerText = `TeamID: ${players.teamId}`;
    playerCohorId.innerText = `CohortID: ${players.cohortId}`;
}

function createPlayersUI(playersArr) {
    let playersString ="";
    playersArr.forEach(
      (players) => (playersString += `<li> ${data.players}</li>`)
    );
    allPlayers.innerText = playersString;
}

function createBasicPuppyProfile(players){
    setImgSrcAndAlt(
        imgContainer,
        players.imageUrl,
        players.name
    );
    createBasicInfoUI(players);
    // createAbilitiesUI(pokemon.abilities);
}

// if (Array.isArray(players) && players.length > 0) {
//     const firstPlayer = players[0]; // Considering the first player in the list
//     setImgSrcAndAlt(imgContainer, players.imageUrl, players.name);
//     createBasicInfoUI(players);
// } else {
//     console.error('No players data available or invalid data received.');
// }


/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const json = await response.json();
        console.log(json);
        createBasicPuppyProfile(json); //Call createBasicPuppyProfile with the fetch
        return json;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

// async function renderPlayers() {
//     const players = await fetchAllPlayers();
//     renderAllPlayers(players);
// }

// function renderAllPlayers(players){
//     let htmlString = "";
//     players.forEach((player) => {
//         htmlString += `<p>${player.name}</p>`;
//     });
//     playerContainer.innerHTML = htmlString;
// }

fetchAllPlayers();


const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${id}`);
        const player = await response.json(); 
        return player;
    } catch (error) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

async function renderPlayerDetails(playerId) {
    try {
        const playerDetails = await fetchSinglePlayer(playerId);
        renderSinglePartyById(playerDetails);
        console.log(player);
        } catch {
            console.error(error);
        }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}/players`,
        {
            method: 'POST',
            body: JSON.stringify(playerObj)({
                name:'Rufus',
                breed:'Irish Setter',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            
            }),    
        });
        console.log(res);
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/PLAYER-ID`)

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */

// const renderAllPlayers = async (playerList) => {
//     try {
//         playerContainer.innerHTML = '';
//         playerList.forEach((player) => {
//             const playerElement = document.createElement('div');
//             playerElement.classList.add('player');
//             playerElement.innerHTML = `
//             <h2>${player.name}</h2>
//             <p>${player.breed}</p>
//             <p>${player.status}</p>
//             <p>${player.imgUrl}</p>
//             `;
//             playerContainer.appendChild(playerElement);
//         })
//     } catch (err) {
//         console.error('Uh oh, trouble rendering players!', err);
//     }
// };


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

// const init = async () => {
//      players = await fetchAllPlayers();
//     // renderAllPlayers(players);

//     renderNewPlayerForm();
// }

