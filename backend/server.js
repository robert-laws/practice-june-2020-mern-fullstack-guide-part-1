const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to basic api' }))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));