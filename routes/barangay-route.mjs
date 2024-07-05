import express from "express";
import route from '../constants/routePath.mjs';
import { 
    getAllBarangays, 
    getBarangayByID,
    getBarangaysByCityMunCode
 } from "../controllers/barangay-controller.mjs";

const router = express.Router();

router.get(route.GET_ALL, (req, res) => {
    getAllBarangays().then(result => res.send(result));
});

router.get(route.GET_BY_ID, (req, res) => {
    getBarangayByID(req.params.id).then(result => res.send(result));
});

router.get(route.GET_BY_CITY_MUNICIPALITY_CODE, (req, res) => {
    getBarangaysByCityMunCode(req.params.id).then(result => res.send(result));
});

export default router;