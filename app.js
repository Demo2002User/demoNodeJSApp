const express = require('express');

const app = express();

app.use(express.static('public'));

mongodb_connection_string = 'mongodb://admin:admin123@localhost:27017/admin'

aws_api_key = 'AKIAIOSFODNN7EXAMPLE'
aws_secret_key = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
