const express = require('express');  // i imported the Express library for creating the server
const bodyParser = require('body-parser');  //i imported body-parser to parse incoming request bodies
const app = express();  // created an instance of the Express application
const port = 3004;  // defined the port number for the server to listen on, i chose 3004

const natural = require('natural');  //imported the 'natural' library for natural language processing
const tokenizer = new natural.WordTokenizer();  // creating an instance of the WordTokenizer for tokenizing text

app.use(bodyParser.json());  // the middleware to parse JSON bodies of incoming requests

// the functiom to process user input by tokenizing it
function processInput(input) {
    const tokens = tokenizer.tokenize(input.toLowerCase());  //convert the input to lowercase and tokenize it
    return tokens;  // return the array of tokens
}

//imported the chatbot response logic from a separate module
const getResponse = require('./chatbot');

// my route to handle POST requests to /chat
app.post('/chat', (req, res) => {
    console.log('Received message:', req.body.message);  
    const userMessage = req.body.message;  // Extract the user message from the request body
    const botResponse = getResponse(userMessage);  //get the chatbot's response based on the message
    console.log('Response:', botResponse); 
    res.json({ response: botResponse });  //sending the chatbot's response back to the client as JSON
});

const cors = require('cors');  //i imported the CORS library to handle cross-origin requests

app.use(cors());  //enabling CORS for all routes



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);  // starting the server on 3004 which i chose above
});
