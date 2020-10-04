const { getOutputFile, getInputFile, getShift, getAction} = require("./system/console");
const  App = require("./system/app");

const app = new App(getInputFile(), getOutputFile(), getShift(), getAction());
app.checkErorr();
app.run();
