/**
 * This will import express node_module, which is a minimal server to host.
 */
const express = require('express');
/**
 * This will create new express server using module we just imported
 */
const app = express();
/**
 * We can define the url paths of the server here 
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});
/**
 * Start listening to request on this port
 */
app.listen(3000);