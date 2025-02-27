
function calculateResults(event){

    event.preventDefault();

  
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);

    if (!weight || !height || !gender) {
        alert("Please fill out all fields");
        return
    }
    const heightInMeters = height/100;

    let bmr;
    if (gender === "male") {
        bmr =  88.363 + (14.397 * weight) + (4.799 * heightInMeters * 100) - (5.677 * (age))
    }else{
        bmr =  447.593 + (9.247 * weight) + (3.098 * heightInMeters * 100) - (6.8 * (age))
    }
    const tdee = bmr * 1.55;

    document.getElementById("bmr-results").textContent = bmr.toFixed(2);
    document.getElementById("calories-result").textContent = tdee.toFixed(2);


    const bodyfat = calculateBodyFat(gender, waist, neck, HTMLPictureElement, height);
    document.getElementById("bodyfat-result").textConent = bodyfat.toFixed(2) + "%";
}
