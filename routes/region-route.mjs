import express from "express";
import route from '../constants/routePath.mjs';
import { 
    getAllRegions, 
 } from "../controllers/region-controller.mjs";

const router = express.Router();

router.get(route.GET_ALL, (req, res) => {
    getAllRegions().then(result => res.send(result));
});

export default router;