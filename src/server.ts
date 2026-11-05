import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

const SMS = 'Server is running!';

app.listen(PORT, () => console.log(SMS));
