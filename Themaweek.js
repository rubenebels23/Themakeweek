const questions = [
    {
        question: "Hallo, ik ben mijn wachtwoord vergeten en kan niet meer inloggen. Zou je me alsjeblieft kunnen helpen om toegang te krijgen tot mijn account? Ik heb het heel druk en moet snel inloggen voor een belangrijke meeting.",
        options: ["Hallo, wie bent u precies?", "Hoi, wat is uw naam?", "Gesprek beëindigen"],
        nextQuestions: [1, 2, null]
    },
    {
        //1
        question: "Oh, ik ben een collega van je. Ik werk op de juridische afdeling en ik heb echt snel hulp nodig om in te loggen voor een meeting die over een uur begint! Het is een drukke dag en ik kan niet wachten om het probleem op te lossen. Kun je me snel helpen met mijn inloggegevens?",
        options: ["Kunt u uw afdeling noemen?", "Wat is precies het probleem?", "Gesprek beëindigen"],
        nextQuestions: [3, 4, null]
    },
    {
        //2
        question: "Ja, natuurlijk, ik ben Jan van de IT-afdeling. Kun je me snel helpen met mijn inloggegevens? Ik ben bezig met het oplossen van een systeemfout, maar ik ben nu ingelogd op een andere computer en heb snel toegang nodig om alles af te ronden.",
        options: ["Natuurlijk, wat heeft u nodig?", "Heeft u al een reset-email geprobeerd?", "Gesprek beëindigen"],
        nextQuestions: [5, 6, null]
    },
    {
        //3
        question: "Ik zit bij de afdeling Beveiliging en moet met spoed toegang krijgen tot een vertrouwelijk document om een rapport voor het bestuur af te ronden. Het document is essentieel voor de presentatie. Kan je mijn wachtwoord resetten zodat ik snel verder kan werken?",
        options: ["Zeker, wat is uw gebruikersnaam?", "Heeft u toestemming van uw leidinggevende?", "Gesprek beëindigen"],
        nextQuestions: [7, 8, null]
    },
    {
        //4
        question: "Ik heb gewoon de toegangscode nodig om even in te loggen, mijn e-mail doet het ook niet. Dit is echt dringend! Het is alsof ik vastzit in een systeem zonder enige manier om verder te werken. Kun je me alsjeblieft helpen?",
        options: ["Ik kan daar niet zomaar bij, zal ik uw naam en achternaam mogen hebben?", "Sorry, ik kan niet zomaar toegang geven.", "Gesprek beëindigen"],
        nextQuestions: [9, 10, null]
    },
    {
        //5
        question: "Kun je misschien een wachtwoord reset-verzoek indienen of mijn gebruikersnaam bevestigen zodat ik snel verder kan met mijn werk? Mijn baas heeft me dringend gevraagd om in te loggen om belangrijke informatie te verkrijgen. Alles staat op het spel als ik nu niet kan inloggen.",
        options: ["Wat is uw e-mailadres?", "Heeft u een verzoekformulier ingevuld?", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //6
        question: "Sorry daar heb ik wel aan gedacht maar ik had daar problemen mee. Het lukte me niet door omstandigheden, zou je me alsjeblieft kunnen helpen?",
        options: ["Prima, geef uw gegevens maar door.", "Ik kan alleen helpen via het formele systeem.", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //7
        question: "Ik begrijp je vraag, maar ik heb echt snel toegang nodig. Je weet hoe het gaat in de IT, alles moet snel geregeld worden! Als ik deze toegang niet krijg, kan ik mijn werk niet afmaken en verliezen we de belangrijke vergadering. Kun je echt geen uitzondering maken?",
        options: ["Natuurlijk, stuur me de benodigde gegevens.", "Probeer het via de officiële kanalen.", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //8
        question: "Nee op het moment niet. Wat heeft u nodig om mijn wachtwoord te resetten? Ik ben eigenlijk met een vertrouwelijke zaak bezig die snel moet worden opgelost. Ik kan het systeem niet opnieuw opstarten, dus het enige wat ik nodig heb is mijn wachtwoord om verder te kunnen werken. Wat heeft u van mij nodig om alles te regelen?",
        options: ["Uw gebruikersnaam en personeelsnummer.", "Ik kan niet zomaar een wachtwoord geven, het spijt me", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //9
        question: "Als je me mijn gebruikersnaam kunt geven, kan ik verder. Dit probleem heeft zoveel tijd gekost en het hindert mijn werk enorm. Mijn baas blijft me pushen. Kun je gewoon mijn gebruikersnaam bevestigen?",
        options: ["Nou goed dan, wat is uw e-mail adres?", "Ik kan geen informatie delen zonder verificatie.", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //10
        question: "Ik snap het, je voert je werk ook heel goed uit. Maar alsjeblieft dit kan mij m'n baan kosten..",
        options: ["Stuur me een bevestiging van je ID.", "Ik zal contact opnemen met je leidinggevende.", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },
    {
        //11
        question: "Kun je mijn laatste inloggegevens vinden en die bevestigen? Dat zou alles voor mij oplossen en ik kan weer verder werken. Mijn team rekent op me, en ik moet dit echt vandaag af hebben.",
        options: ["Wat is je personeelsnummer?", "Neem contact op met HR voor een reset.", "Gesprek beëindigen"],
        nextQuestions: [12, 13, null]
    },


    
    




    {
        //12
        question: "De hacker heeft ingebroken in je account. De volgende keer minder weggeven en beter opletten!",
        options: [],
        nextQuestions: []
    },
    {
        //13
        question: "Je hebt goed volgehouden en de hacker heeft het opgegeven!",
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

    document.querySelector(".back-btn").style.display = questionHistory.length > 0 ? "block" : "none";
    document.querySelector(".restart-btn").style.display = "none";
}

function goBack() {
    if (questionHistory.length > 0) {
        const previousIndex = questionHistory.pop();
        showQuestion(previousIndex);
    }
}

function restartConversation() {
    currentQuestionIndex = 0;
    questionHistory.length = 0;
    showQuestion(currentQuestionIndex);
}

showQuestion(currentQuestionIndex);
