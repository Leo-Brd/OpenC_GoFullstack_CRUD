const express = require('express');

mongoose.connect('mongodb+srv://LeoBrd:43LHxFbLd4X2f7oy@openc-gofullstack.oltcf.mongodb.net/?retryWrites=true&w=majority&appName=OpenC-GoFullstack',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());















module.exports = app;