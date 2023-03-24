// SNACK 1 //
// [X] Creare un array di oggetti
// [X] Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// [X] Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikesArray = [
    {
        name: "Atala",
        weight: 7
    },
    {
        name: "Graziella",
        weight: 14
    },
    {
        name: "BMX",
        weight: 5
    },
    {
        name: "Bianchi",
        weight: 10
    }
];

const [bike1, bike2, bike3, bike4] = bikesArray;

bikesArray.forEach(bike => {
    lighterWgtBike = Math.min(bike1.weight, bike2.weight, bike3.weight, bike4.weight);
    bikeWgt = bike.weight;
    
    if (bikeWgt === lighterWgtBike) {
        console.log(bike);

        domContainer = document.getElementById("container");
        domContainer.innerHTML += `<span>The most light-weighted bike is: <strong>${bike.name}</strong> and it weights <strong>${bike.weight} Kg</strong></span>`; 

    }
});