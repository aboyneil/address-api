import express from "express";
import route from '../constants/routePath.mjs';
import { 
    getAllProvinces, 
    getProvinceByID,
    getProvincesByRegionCode
 } from "../controllers/province-controller.mjs";

const router = express.Router();

router.get(route.GET_ALL, (req, res) => {
    getAllProvinces().then(result => res.send(result));
});

router.get(route.GET_BY_ID, (req, res) => {
    getProvinceByID(req.params.id).then(result => res.send(result));
});

router.get(route.GET_BY_REGION_CODE, (req, res) => {
    getProvincesByRegionCode(req.params.id).then(result => res.send(result));
});

export default router;