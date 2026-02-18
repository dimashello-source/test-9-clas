let correctAnswer;
let currentQuestion = 0;
let maxQuestions = 10000;

function generateQuestion() {

    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let operation = ["+", "-", "*"][Math.floor(Math.random() * 3)];

    let questionText = `${a} ${operation} ${b} = ?`;

    switch(operation) {
        case "+":
            correctAnswer = a + b;
            break;
        case "-":
            correctAnswer = a - b;
            break;
        case "*":
            correctAnswer = a * b;
            break;
    }

    let answers = [correctAnswer];

    while (answers.length < 4) {
        let wrong = correctAnswer + Math.floor(Math.random() * 10) - 5;
        if (!answers.includes(wrong)) {
            answers.push(wrong);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    document.getElementById("question").innerText =
        `Вопрос ${currentQuestion + 1} / 10000\n` + questionText;

    for (let i = 0; i < 4; i++) {
        document.getElementById("btn" + i).innerText = answers[i];
    }

    window.currentAnswers = answers;
}

function checkAnswer(index) {
    if (window.currentAnswers[index] == correctAnswer) {
        document.getElementById("result").innerText = "✅ Правильно / Дұрыс";
    } else {
        document.getElementById("result").innerText =
            "❌ Неправильно / Қате. Ответ: " + correctAnswer;
    }
}

function nextQuestion() {
    if (currentQuestion < maxQuestions - 1) {
        currentQuestion++;
        document.getElementById("result").innerText = "";
        generateQuestion();
    } else {
        document.getElementById("question").innerText = "Тест аяқталды!";
    }
}

generateQuestion();