// SNACK 2 //
// [X] Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// [X] Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// [X] Generare numeri random al posto degli 0 nelle proprietà:
//      - Punti fatti e falli subiti.
// [] Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

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


let updatedTeamArray = [];
teamsArray.forEach(team => {
    let teamName = team.name;
    let teamPoints = team.points;
    let teamFouls = team.fouls;

    teamPoints = Math.floor(Math.random() * 101);
    teamFouls = Math.floor(Math.random() * 12);

    console.log("Points are: " + teamPoints);
    console.log("Fouls are: " + teamFouls);
});