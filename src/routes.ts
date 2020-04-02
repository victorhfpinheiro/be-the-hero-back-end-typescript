import { celebrate } from 'celebrate';
import express from 'express';
import { IncidentController } from './controllers/IncidentController';
import { OngController } from './controllers/OngController';
import { ProfileController } from './controllers/ProfileController';
import { SessionController } from './controllers/SessionController';
import { IncidentsValidator } from './validators/IncidentsValidator';
import { OngValidator } from './validators/OngValidator';
import { ProfileValidator } from './validators/ProfileValidator';
import { SessionValidator } from './validators/SessionValidator';

const ongController: OngController = new OngController();
const sessionController: SessionController = new SessionController();
const profileController: ProfileController = new ProfileController();
const incidentsControoler: IncidentController = new IncidentController();

const routes = express.Router();

routes.post('/sessions', celebrate(SessionValidator.create), sessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate(OngValidator.create), ongController.create);

routes.get('/profile', celebrate(ProfileValidator.index), profileController.index);

routes.get('/incidents', celebrate(IncidentsValidator.index), incidentsControoler.index);
routes.post('/incidents', celebrate(IncidentsValidator.create), incidentsControoler.create);
routes.delete('/incidents/:id', celebrate(IncidentsValidator.delete), incidentsControoler.delete);

export default routes;