import express from "express";
import * as userController from '../controllers/user.controller';

const router=express.Router()

router.get('/covidData',userController.covidData)
router.get('/stateWise',userController.stateWise)

export default router