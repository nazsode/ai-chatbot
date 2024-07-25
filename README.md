# AI Chatbot Prototype

## Overview
For this project, I chose AI chatbot prototype designed for "customer support in an e-commerce" platform. The chatbot handles basic greetings, answers FAQs and provides a fallback response for unknown queries.

## Technologies I Used
- Node.js
- Express
- Body-parser
- Natural

## My Approach
1. **Setting up a Node.js server using Express:** I used Express to create a server that listens for incoming requests on a specified port.
2. **Implementing basic NLP using the `natural` library:** I used the `natural` library to tokenize user input, which helps in matching the input with the FAQs.
3. **Storing FAQs in a JSON file:** I stored FAQs and their corresponding answers in a JSON file, which the chatbot uses to find the relevant answer.
4. **Creating a chatbot logic to process user input and respond with the appropriate FAQ answer:** The chatbot logic processes user input, tokenizes it, and tries to find a matching FAQ. If a match is found, it responds with the corresponding answer; otherwise, it gives a fallback response.
5. **Deploying the chatbot as a web service:** The chatbot is deployed as a web service, and it can be tested by sending POST requests to the server.

## Challenges
- **Handling various forms of user input to match FAQ questions:** It was challenging to ensure that different variations of user input still matched the correct FAQ that's in the JSON file.
- **Ensuring that my chatbot's responses are accurate and relevant:** Making sure the chatbot provides accurate answers to the users' questions was critical for me.


## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd ai-chatbot-prototype
