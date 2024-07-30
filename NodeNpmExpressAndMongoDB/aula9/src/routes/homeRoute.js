import express from 'express';
import HomeController from '../controllers/HomeController.js';
// eslint-disable-next-line no-unused-vars
const router = new express.Router();
const homeController = new HomeController();

router.get('/', homeController.index);

export default router;
