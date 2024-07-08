import Barangay from '../models/barangay-model.mjs';


export const getAllBarangays = async () => {
    return await Barangay.find({}) || [];
};

export const getBarangayByID = async (id) => {
    return await Barangay.findOne({id: id}) || false;
};

export const getBarangayByBarangayCode = async (brgyCode) => {
    return await Barangay.findOne({brgyCode: brgyCode}) || false;
};


export const getBarangaysByCityMunCode = async (citymunCode) => {
    return await Barangay.find({citymunCode: citymunCode}) || [];
};