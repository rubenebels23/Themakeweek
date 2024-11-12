const questions = [
    {
        question: "Hoi, ik ben mijn wachtwoord vergeten. Zou je me even kunnen helpen?",
        options: ["Wie bent u precies?", "Wat is uw naam?", "Gesprek beëindigen"],
        nextQuestions: [1, 2, null]
    },
    {
        question: "Oh, ik ben een collega van je, ik heb echt even snel hulp nodig!",
        options: ["Kunt u uw afdeling noemen?", "Welke informatie heeft u precies nodig?", "Gesprek beëindigen"],
        nextQuestions: [3, 4, null]
    },
    {
        question: "Eh, mijn naam is Jan van IT, kan je me snel helpen?",
        options: ["Zeker, wat heeft u nodig?", "Heeft u al een reset-email geprobeerd?", "Gesprek beëindigen"],
        nextQuestions: [5, 6, null]
    },
    // Meer vragen toevoegen om oneindig door te gaan
    {
        question: "Ik werk op de afdeling Beveiliging, als je het wachtwoord opnieuw kunt instellen?",
        options: ["Sorry, ik kan dat niet zomaar doen.", "Kunt u wat meer details geven?", "Gesprek beëindigen"],
        nextQuestions: [7, 8, null]
    },
    {
        question: "Ik heb gewoon de toegangscode nodig om in te loggen, alsjeblieft!",
        options: ["Sorry, dat kan ik niet delen.", "Heeft u een andere manier geprobeerd?", "Gesprek beëindigen"],
        nextQuestions: [9, 10, null]
    },
    {
        question: "Einde van het gesprek. Bedankt voor het spelen!",
        options: [],
        nextQuestions: []
    }
];

let currentQuestionIndex = 0;
const questionHistory = [];

function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextIndex = currentQuestion.nextQuestions[optionIndex];

    if (nextIndex === null) {
        document.getElementById("question").textContent = "Gesprek beëindigd. Bedankt voor je alertheid!";
        document.querySelectorAll(".option").forEach(btn => btn.style.display = "none");
        document.querySelector(".back-btn").style.display = "none";
    } else if (nextIndex !== undefined) {
        questionHistory.push(currentQuestionIndex);
        showQuestion(nextIndex);
    } else {
        document.getElementById("question").textContent = "Bedankt voor het spelen!";
        document.querySelectorAll(".option").forEach(btn => btn.style.display = "none");
        document.querySelector(".back-btn").style.display = "none";
    }
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const questionData = questions[index];
    document.getElementById("question").textContent = questionData.question;

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((button, idx) => {
        if (questionData.options[idx]) {
            button.textContent = questionData.options[idx];
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    // Toon de "Terug" knop alleen als er een geschiedenis is
    document.querySelector(".back-btn").style.display = questionHistory.length > 0 ? "block" : "none";
}

function goBack() {
    if (questionHistory.length > 0) {
        const previousIndex = questionHistory.pop();
        showQuestion(previousIndex);
    }
}

// Start het gesprek met de eerste vraag
showQuestion(currentQuestionIndex);