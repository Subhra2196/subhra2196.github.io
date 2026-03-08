function predict() {

    let hours = document.getElementById("hours").value
    let attendance = document.getElementById("attendance").value
    let assignments = document.getElementById("assignments").value

    if (hours > 4 && attendance > 70) {
        document.getElementById("result").innerText = "Prediction: PASS"
    }
    else {
        document.getElementById("result").innerText = "Prediction: FAIL"
    }

}