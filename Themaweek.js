const questions = [
    {
        question: "Hoi, ik ben mijn wachtwoord vergeten. Zou je me even kunnen helpen?",
        options: ["Hallo, wie bent u precies?", "Hoi, wat is uw naam?", "Gesprek beëindigen"],
        nextQuestions: [1, 2, null]
    },
    {
        //1
        question: "Oh, ik ben een collega van je, ik heb echt snel hulp nodig om in te loggen voor een meeting!",
        options: ["Kunt u uw afdeling noemen?", "Wat is precies het probleem?", "Gesprek beëindigen"],
        nextQuestions: [3, 4, null]
    },
    {
        //2
        question: "Ja, natuurlijk, ik ben Jan van de IT-afdeling. Kun je me snel helpen met mijn inloggegevens?",
        options: ["Natuurlijk, wat heeft u nodig?", "Heeft u al een reset-email geprobeerd?", "Gesprek beëindigen"],
        nextQuestions: [5, 6, null]
    },
    {
        //3
        question: "Ik zit bij de afdeling Beveiliging en moet met spoed in een document kunnen. Kan je mijn wachtwoord resetten?",
        options: ["Zeker, wat is uw gebruikersnaam?", "Heeft u toestemming van uw leidinggevende?", "Gesprek beëindigen"],
        nextQuestions: [7, 8, null]
    },
    {
        //4
        question: "Ik heb gewoon de toegangscode nodig om even in te loggen, mijn e-mail doet het ook niet.",
        options: ["Wat is uw gebruikersnaam?", "Sorry, ik kan niet zomaar toegang geven.", "Gesprek beëindigen"],
        nextQuestions: [9, 10, null]
    },
    {
        //5
        question: "Kun je misschien een wachtwoord reset-verzoek indienen of mijn gebruikersnaam bevestigen?",
        options: ["Wat is uw e-mailadres?", "Heeft u een verzoekformulier ingevuld?", "Gesprek beëindigen"],
        nextQuestions: [11, 12, null]
    },
    {
        //6
        question: "Bedankt voor je hulp, ik geef je even mijn gegevens om het sneller te maken.",
        options: ["Prima, geef uw gegevens maar door.", "Ik kan alleen helpen via het formele systeem.", "Gesprek beëindigen"],
        nextQuestions: [13, 14, null]
    },
    {
        //7
        question: "Ik begrijp het, maar ik heb echt snel toegang nodig. Je weet hoe het gaat in de IT!",
        options: ["Natuurlijk, stuur me de benodigde gegevens.", "Probeer het via de officiële kanalen.", "Gesprek beëindigen"],
        nextQuestions: [15, 16, null]
    },
    {
        //8
        question: "Wat heeft u nodig om mijn wachtwoord te resetten?",
        options: ["Uw gebruikersnaam en personeelsnummer.", "Alleen uw gebruikersnaam is voldoende.", "Gesprek beëindigen"],
        nextQuestions: [17, 18, null]
    },
    {
        //9
        question: "Oké, ik stuur je mijn gebruikersnaam en nummer nu, bedankt!",
        options: ["Graag gedaan, ik regel het voor je.", "Zorg voor een goed verificatieproces.", "Gesprek beëindigen"],
        nextQuestions: [19, 20, null]
    },
    {
        //10    
        question: "Einde van het gesprek. De hacker heeft succesvol toegang gekregen.",
        options: [],
        nextQuestions: []
    }
];

let currentQuestionIndex = 0;
const questionHistory = [];

// Huidige functies blijven hetzelfde zoals eerder aangegeven
// Functie om de opties en gesprekken weer te geven en te beheren zoals eerder


function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextIndex = currentQuestion.nextQuestions[optionIndex];

    if (nextIndex === null) {
        document.getElementById("question").textContent = "Gesprek beëindigd. Bedankt voor je alertheid!";
        document.querySelectorAll(".option").forEach(btn => btn.style.display = "none");
        document.querySelector(".back-btn").style.display = "none";
        document.querySelector(".restart-btn").style.display = "block"; // Toon "Opnieuw spelen" knop
    } else if (nextIndex !== undefined) {
        questionHistory.push(currentQuestionIndex);
        showQuestion(nextIndex);
    } else {
        document.getElementById("question").textContent = "Bedankt voor het spelen!";
        document.querySelectorAll(".option").forEach(btn => btn.style.display = "none");
        document.querySelector(".back-btn").style.display = "none";
        document.querySelector(".restart-btn").style.display = "block"; // Toon "Opnieuw spelen" knop
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
    // Verberg de "Opnieuw spelen" knop tijdens het gesprek
    document.querySelector(".restart-btn").style.display = "none";
}

function goBack() {
    if (questionHistory.length > 0) {
        const previousIndex = questionHistory.pop();
        showQuestion(previousIndex);
    }
}

// Functie om het gesprek opnieuw te starten
function restartConversation() {
    currentQuestionIndex = 0;
    questionHistory.length = 0;
    showQuestion(currentQuestionIndex);
}

// Start het gesprek met de eerste vraag
showQuestion(currentQuestionIndex);