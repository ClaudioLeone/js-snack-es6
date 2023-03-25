// SNACK 2 //
// [X] Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// [X] Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// [X] Generare numeri random al posto degli 0 nelle proprietà:
//      - Punti fatti e falli subiti.
// [X] Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teamsArray = [
    {
        name: "Foolean FC",
        points: 0,
        fouls: 0
    },
    {
        name: "Boolean FC",
        points: 0,
        fouls: 0
    },
    {
        name: "Coolean FC",
        points: 0,
        fouls: 0
    },
];

const [foo, boo, coo] = teamsArray;
let updatedTeamArray = [];

teamsArray.forEach(team => {
    team.points = Math.floor(Math.random() * 101);
    team.fouls = Math.floor(Math.random() * 23);
    
    delete team.points;
});

updatedTeamArray.push(foo, boo, coo);
console.log(updatedTeamArray);

const domContainer = document.getElementById("container");
domContainer.innerHTML += `
    <span><strong>TEAMS</strong> are: 
        <ul>
            <li><strong>${foo.name}</strong> &rarr; 👟💥 Falli: <strong>${foo.fouls}</strong></li>
            <br>
            <li><strong>${boo.name}</strong> &rarr; 👟💥 Falli: <strong>${boo.fouls}</strong></li>
            <br>
            <li><strong>${coo.name}</strong> &rarr; 👟💥 Falli: <strong>${coo.fouls}</strong></li>
        </ul>
    </span>
`;