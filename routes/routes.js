// Description: Fichier contenant la définition des routes de l'application.




const { Router } = require('express');
const service_project = require('../service/service_Project');

module.exports = function getRoutes() {
    const router = Router();
    //router.get('/user', controller_user.getUser);
    //router.post('/login', controller_user.login);
    //router.get('/project', controller_project.getProject);
    //router.get('/projects', controller_project.getProjects);
    //router.get('/infoClem', controller_info.getInfoClem);

    //router.post('/createUser', controller_user.createUser);
    router.post('/createProject', async function (req, res) {
        console.log('createProject');
        /*
        const titre = req.body.titre;
        const descriptionIntro = req.body.descriptionIntro;
        const description = req.body.description;
        const ListeMotCle = req.body.ListeMotCle;
        const lienImage = req.body.lienImage;
        const lienGitHub = req.body.lienGitHub;
        const listeImmages = req.body.listeImmages;
        const nbVue = req.body.nbVue;
        service_project.createProject(titre, descriptionIntro, description, ListeMotCle, lienImage, lienGitHub, listeImmages, nbVue);

        res.send('Project created');
        */
    });
    router.get('/api/projects', async function (req, res) {
        console.log('getProjects');
        const projects = await service_project.getProjects();
        res.send(projects);
    });


    router.post('/api/projects', async function (req, res) {
        

        const titre = req.body.titre;
        const descriptionIntro = req.body.descriptionIntro;
        const description = req.body.description;
        const ListeMotCle = req.body.ListeMotCle;
        const lienImage = req.body.lienImage;
        const lienGitHub = req.body.lienGitHub;
        const listeImmages = req.body.listeImmages;
        const nbVue = req.body.nbVue;
        const project = await service_project.createProject(titre, descriptionIntro, description, ListeMotCle, lienImage, lienGitHub, listeImmages, nbVue);
        console.log(project);
        res.send(project);
    });

    //modifier un projet

    router.put('/api/projects/:id', async function (req, res) {
        const id = req.params.id;
        const titre = req.body.titre;
        const descriptionIntro = req.body.descriptionIntro;
        const description = req.body.description;
        const ListeMotCle = req.body.ListeMotCle;
        const lienImage = req.body.lienImage;
        const lienGitHub = req.body.lienGitHub;
        const listeImmages = req.body.listeImmages;
        const nbVue = req.body.nbVue;
        const project = await service_project.modifyProject(id, titre, descriptionIntro, description, ListeMotCle, lienImage, lienGitHub, listeImmages, nbVue);
        res.send(project);
    }
    );
    


    router.delete('/api/projects/:id', async function (req, res) {
        const id = req.params.id;
        await service_project.deleteProject(id);
        res.send('Project deleted');
    });

    router.get('/api/projects/:id', async function (req, res) {
        const id = req.params.id;
        const project = await service_project.getProject(id);
        res.send(project);
    });
    //router.post('/modifyProject', controller_project.modifyProject);
    //router.post('/modifyInfoClem', controller_info.modifyInfoClem);
    return router;
}