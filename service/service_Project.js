
const mongoose = require('mongoose');
const mongooseProject = require('../models/model_Project');


exports.createProject= async function (title, descriptionIntro, description, ListeMotCle, linkImg, lienGitHub, listeImmages, nbVue) {
    console.log(title);
    

    const project = new mongooseProject({
        titre: title,
        descriptionIntro: descriptionIntro,
        description: description,
        ListeMotCle: ListeMotCle,
        lienImage: linkImg,
        lienGitHub: lienGitHub,
        listeImmages: listeImmages,
        nbVue: nbVue
    });
    
    await project.save();
    return project;
}

exports.getProjects = async function () {
    const projects = await mongooseProject.find();
    return projects;
}

exports.getProject = async function (id){
    const projects = await mongooseProject.findById(id);
    return projects;
}

exports.deleteProject = async function (id){
    await mongooseProject.findByIdAndDelete(id);
    console.log('Project deleted');
}





//exemple de requette de creation de project
/*{
    "titre":"Projet Fullstack",
    "descriptionIntro":"Projet Fullstack",
    "description":"Projet Fullstack",
    "ListeMotCle":["Projet Fullstack"],
    "lienImage":"https://www.google.com",
    "lienGitHub":"https://www.google.com",
    "listeImmages":["https://www.google.com"],
    "nbVue":0
}*/
