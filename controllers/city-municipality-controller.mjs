import CityMunicipality from '../models/city-municipality-model.mjs';


export const getAllCityMunicipality = async () => {
    return await CityMunicipality.find({}) || [];
};

export const getCityMunicipalityByID = async (id) => {
    return await CityMunicipality.findOne({id: id}) || false;
};


export const getCityMunicipalityByRegionCode = async (provCode) => {
    return await CityMunicipality.find({provCode: provCode}) || [];
};