document.getElementById("button1").addEventListener("click", function () {
    showContent("content1", "button1");
});

document.getElementById("button2").addEventListener("click", function () {
    showContent("content2", "button2");
});

document.getElementById("button3").addEventListener("click", function () {
    showContent("content3", "button3");
});

document.getElementById("button4").addEventListener("click", function () {
    showContent("content4", "button4");
});

function showContent(contentId, buttonId) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    document.getElementById(contentId).classList.add("active");

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
    document.getElementById(buttonId).classList.add("selected");
}

/**/

function buttonColor() {
    document.getElementById("buttonclicked").style.backgroundColor = '#911';
}


var myQuestions = [
    {
        question: "Koji brojevi od navedenih su neparni?",
        answers: {
            a: '2, 4, 6',
            b: '1, 3, 5',
            c: '8, 10, 12',
            d: '20, 14, 22'
        },
        correctAnswer: 'a, b, c'
    },
    {
        question: "Koliko je 2 + 5?",
        answers: {
            a: '24',
            b: '5',
            c: '7',
            d: '2'
        },
        correctAnswer: 'c'
    },
    {
        question: "Kolika je konverzija € u kn?",
        answers: {
            a: '7.25',
            b: '7.534',
            c: '7.543',
            d: '7.5528'
        },
        correctAnswer: 'b'
    },
    {
        question: "Koliko je 5 * 5?",
        answers: {
            a: '45',
            b: '25',
            c: '30 - 5',
            d: '22'
        },
        correctAnswer: 'b, c'
    }
];
