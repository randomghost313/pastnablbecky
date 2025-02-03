const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 9868; 
const LOGPATH = './app.log';

app.get('/', (req,res) => {
	const timestamp = new Date().toISOString();
	fs.appendFile(LOGPATH, timestamp + " - " + req.socket.remoteAddress + "\n", (err)=>{});	
});

app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});
