const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.get('/api/courses', (req, res) => {
	res.send([1,2,3]);
});

app.get('/api/posts/:year/:month', (req, res) => {
	res.send({
		params: req.params,
		query: req.query
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});