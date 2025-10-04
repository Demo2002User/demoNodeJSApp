const express = require('express');

const app = express();

app.use(express.static('public'));

mongodb_connection_string = 'mongodb://admin:admin123@localhost:27017/admin'

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
