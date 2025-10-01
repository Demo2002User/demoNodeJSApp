const express = require('express');

const app = express();

const token = 'hfeqgfqjasfgahkfghafghadgfhafduehfueuweotuoweytoweyrtouwrutwurytoywrtyworytoiwruyio';

app.use(express.static('public'));

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
