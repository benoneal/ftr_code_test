# For The Record Code Test

### Specification: 

The FTR Platform is mainly written in TypeScript and we’d prefer if your submission was too. You can implement the below program however you’re most comfortable (e.g. web app, console program, desktop app, etc). The way the system handles user interaction isn't important, but preserving the features is. For example, if you create a website you may choose to implement halt/resume as buttons not text inputs.

The application should accept an ongoing series of user supplied numbers as inputs, and output notifications when certain conditions are met. It should operate as follows:

1. On startup, the program will prompt the user for the number of seconds (X) between outputting the frequency of each number to the screen.
2. Every X seconds the program will display, in frequency descending order, the list of numbers and their frequency.
3. If the user enters 'halt' the timer should pause.
4. If the user enters 'resume' the timer should resume.
5. If the user enters a number that is one of the first 1000 Fibonacci numbers, the system should alert "FIB"
6. If the user enters 'quit', the application should output the numbers and their frequency, a farewell message, and finally terminate

### To run

```
npm i
npm start
```

## Changes to the application

> You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?

The application allows for modular UIs. Any UI conforming to the interface would work, and the interface can easily be mapped to an implementation suited to the environment (event emitters, sockets, streams, Redux middleware, RESTful http, etc).

> You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.

1. Covering the core functionality with tests.
2. Containerizing (e.g. via Docker) 
3. Deploying to a hosted server
4. Granting customers access to the instance