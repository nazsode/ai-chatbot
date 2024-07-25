const fs = require('fs');  //i imported the file system module to read files
const natural = require('natural');  //i imported the 'natural' library for NLP
const tokenizer = new natural.WordTokenizer();  // creating a tokenizer instance
const data = JSON.parse(fs.readFileSync('faqs.json'));  // reading and parsing the FAQs JSON file

//function to process user input by tokenizing it
function processInput(input) {
    const tokens = tokenizer.tokenize(input.toLowerCase());  //input to lowercase
    return tokens;  // return the array of tokens
}

// the function to get the appropriate response 
function getResponse(input) {
    const tokens = processInput(input);
    
    // define categories to check 
    const categories = ['greetings', 'farewells', 'faqs'];
    // loop through each category
    for (let category of categories) {
        // loop through each item in the category
        for (let item of data[category]) {
            const itemTokens = processInput(item.question);  // Tokenize the question in the JSON file
            if (tokens.every(token => itemTokens.includes(token))) {
                return item.answer;  // return the corresponding answer if there's a match
            }
        }
    }
    // return a fallback response if no match is found for the message
    return "I'm sorry, I don't have an answer for that question.";
}

module.exports = getResponse;  // exporting the getResponse function to use in other files
