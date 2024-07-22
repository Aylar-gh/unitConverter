let inputNumber = document.getElementById("input-number");
let convertBtn = document.getElementById("convert-btn");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(inputNumber.value);

    const metersToFeet = 3.28084;
    const feetToMeters = 0.3048;
    const litersToGallons = 0.264172;
    const gallonsToLiters = 3.78541;
    const kilosToPounds = 2.20462;
    const poundsToKilos = 0.453592;


    if (!isNaN(inputValue)) {
        
        const metersToFeetResult = (inputValue * metersToFeet).toFixed(3);
        const feetToMetersResult = (inputValue * feetToMeters).toFixed(3);
        lengthResult.innerText = `${inputValue} meters = ${metersToFeetResult} feet | ${inputValue} feet = ${feetToMetersResult} meters`;



        const litersToGallonsResult = (inputValue*litersToGallons).toFixed(3);
        const gallonsToLitersResult = (inputValue*gallonsToLiters).toFixed(3);
        volumeResult.innerText = `${inputValue} liters = ${litersToGallonsResult} Gallons | ${inputValue} Gallons =${gallonsToLitersResult} liters`


        const kilosToPoundsResult = (inputValue * kilosToPounds).toFixed(3);
        const poundsToKilosResult = (inputValue * poundsToKilos).toFixed(3);
        massResult.innerText = `${inputValue} kilos = ${kilosToPoundsResult} pounds | ${inputValue} pounds = ${poundsToKilosResult} kilos`;
        


    } else {
        lengthResult.innerText = "Please enter a valid number.";
         volumeResult.innerText = "Please enter a valid number.";
        massResult.innerText = "Please enter a valid number.";
    }
});

