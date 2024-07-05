import Province from '../models/province-model.mjs';


export const getAllProvinces = async () => {
    return await Province.find({}) || [];
};

export const getProvinceByID = async (id) => {
    return await Province.findOne({id: id}) || false;
};


export const getProvincesByRegionCode = async (regCode) => {
    return await Province.find({regCode: regCode}) || [];
};