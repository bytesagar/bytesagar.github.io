
function createWordsCloud() {
    var words = [
        { text: "Javascript", weight: 13 },
        { text: "NodeJs", weight: 10.5 },
        { text: "Git", weight: 9.4 },
        { text: "Github", weight: 8 },
        { text: "Sass", weight: 6.2 },
        { text: "HTML5", weight: 7 },
        { text: "CSS3", weight: 5 },
        { text: "Figma", weight: 6 },

    ];

    $('.skill-container').jQCloud(words);
}

createWordsCloud()