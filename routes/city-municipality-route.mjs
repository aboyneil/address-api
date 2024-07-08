import express from "express";
import route from '../constants/routePath.mjs';
import { 
    getAllCityMunicipality,
    getCityMunicipalityByID,
    getCityMunicipalityByCityMunicipalityCode,
    getCityMunicipalityByRegionCode
 } from "../controllers/city-municipality-controller.mjs";

const router = express.Router();

router.get(route.GET_ALL, (req, res) => {
    getAllCityMunicipality().then(result => res.send(result));
});

router.get(route.GET_BY_ID, (req, res) => {
    getCityMunicipalityByID(req.params.id).then(result => res.send(result));
});

router.get(route.GET_BY_CITY_MUNICIPALITY_CODE, (req, res) => {
    getCityMunicipalityByCityMunicipalityCode(req.params.id).then(result => res.send(result));
});

router.get(route.GET_BY_PROVINCE_CODE, (req, res) => {
    getCityMunicipalityByRegionCode(req.params.id).then(result => res.send(result));
});

export default router;