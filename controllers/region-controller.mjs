import Region from '../models/region-model.mjs';


export const getAllRegions = async () => {
    return await Region.find({}) || [];
};