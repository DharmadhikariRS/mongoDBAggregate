import express from "express";
import * as userController from '../controllers/user.controller';

const router=express.Router()

router.get('/covidData',userController.covidData)
router.get('/stateWise',userController.stateWise)
router.get('/stateWiseTestingCount',userController.stateWiseTestingCount)
router.get('/stateWisePNCount',userController.stateWisePNCount)
router.get('/stateWiseSample',userController.stateWiseSample)
router.get('/vaccineData',userController.vaccineData)
router.get('/vaccineData',userController.vaccineWiseData)


export default router