import express = require('express');
import { GreetingsController } from './app/controller/GreetingsController';


const expressApp: express.Application = express();
const port: string | number = process.env.PORT || 3000;

expressApp.use('/greetings', GreetingsController);

expressApp.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

