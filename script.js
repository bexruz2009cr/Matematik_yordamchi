function playSound() {
    let sound = document.getElementById("sound");
    sound.currentTime = 0;
    sound.play().catch(error => console.log("Ovoz o'ynatmadi: ", error));
}

function add() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("result").value = num1 + num2;
    playSound();
}

function subtract() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("result").value = num1 - num2;
    playSound();
}

function multiply() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("result").value = num1 * num2;
    playSound();
}

function divide() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    if (num2 !== 0) {
        document.getElementById("result").value = num1 / num2;
    } else {
        document.getElementById("result").value = "Xato: Nolga bo'lish mumkin emas";
    }
    playSound();
}

function sqrt() {
    let num = parseFloat(document.getElementById("input1").value);
    if (num >= 0) {
        document.getElementById("result").value = Math.sqrt(num);
    } else {
        document.getElementById("result").value = "Ildiz osti faqat musbat sonlar uchun";
    }
    playSound();
}

function pow() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    document.getElementById("result").value = Math.pow(num1, num2);
    playSound();
}

function gcd(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

function showGcd() {
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    document.getElementById("result").value = gcd(num1, num2);
    playSound();
}

function lcm() {
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    document.getElementById("result").value = (num1 * num2) / gcd(num1, num2);
    playSound();
}
