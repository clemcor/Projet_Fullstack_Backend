const service_project = require('../service/service_Project');

exports.createProject = function (req, res) {
    console.log('coucou');
    console.log(req.body);
    const titre = req.body.titre;
    const descriptionIntro = req.body.descriptionIntro;
    const description = req.body.description;
    const ListeMotCle = req.body.ListeMotCle;
    const lienImage = req.body.lienImage;
    const lienGitHub = req.body.lienGitHub;
    const listeImmages = req.body.listeImmages;
    const nbVue = req.body.nbVue;

    
    
    const project = service_project.createProject(titre, descriptionIntro, description, ListeMotCle, lienImage, lienGitHub, listeImmages, nbVue);

    res.json(project);
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