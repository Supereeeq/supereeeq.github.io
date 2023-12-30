const button = document.getElementById("submit");

button.addEventListener("click", function (item) {
    item.preventDefault();

    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const weight = document.getElementById("weight").value.trim();
    const height = document.getElementById("height").value.trim();
    const age = document.getElementById("age").value.trim();
    const exercise = document.getElementById("exercise").value.trim();
    const goalWeight = document.getElementById("goal_weight").value.trim();

    if ((genderMale || genderFemale) && weight.length > 0 && height.length > 0 && age.length > 0 && exercise.length > 0 && goalWeight.length > 0) {

        const result = getResult(goalWeight, exercise, age, height, weight, genderMale, genderFemale);
        showResult(result);


    } else {
        console.log(":(");
    }
    showResult(answer);
});

function getResult(goalWeight, exercise, age, height, weight, genderMale, genderFemale) {
    let BMR;
    let TDEE;
    let answer;

    if (genderMale) {
        BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (genderFemale) {
        BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        console.log("not working if");
    }

    if (exercise === "not_exercise") {
        TDEE = BMR * 1.2;
    } else if (exercise === "rarely_exercise") {
        TDEE = BMR * 1.375;
    } else if (exercise === "moderatly_exercise") {
        TDEE = BMR * 1.555;
    } else if (exercise === "often_exercise") {
        TDEE = BMR * 1.735;
    } else if (exercise === "extremly_exercise") {
        TDEE = BMR * 1.9;
    } else {
        console.log("2if NIE działa");
    }

    if (weight - goalWeight < 0) {
        answer = TDEE - 500;
    } else if (weight - goalWeight === 0) {
        answer = TDEE;
    } else if (weight - goalWeight > 0) {
        answer = TDEE + 500;
    } else {
        console.log("3if NIE działa");
    }

    return answer;
}

function showResult(answer) {
    const score = document.getElementById("not_result");
        score.style.textAlign = "center";
        score.style.display = "flex";
        score.style.alignItems = "center";
        score.style.justifyContent = "center";
        score.style.boxShadow = "10px 10px 5px #888888"; 
    score.innerText = ("Twoje dzienne\n zapotrzebowanie kalorii to\nokoło " + Math.round(answer) + " cal");
    document.getElementById("not_result").classList.add("yes_result");
    window.scrollBy(0, window.innerHeight);

}