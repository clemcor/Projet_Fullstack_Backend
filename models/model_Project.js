const mongoose = require('mongoose');

const Schema = new mongoose.Schema({


        titre: {type: String, required: true},
        descriptionIntro: {type: String, required: false},
        description: {type: String, required: false},
        ListeMotCle: {type: Array, required: false},
        lienImage: {type: String, required: false},
        lienGitHub: {type: String, required: false},
        listeImmages: {type: Array, required: false},
        nbVue: {type: Number, required: false}

    
});
const Project = mongoose.model('Project', Schema);
module.exports = Project;