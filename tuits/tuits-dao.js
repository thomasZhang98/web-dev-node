import tuitsModel from './tuits-model.js';

export const findAllTuits = async () => await tuitsModel.find();
export const createTuit = async (tuit) => await tuitsModel.create(tuit);
export const deleteTuit = async (tid) => await tuitsModel.deleteOne({_id: tid});
export const updateTuit = async (tid, tuit) => await tuitsModel.updateOne({_id: tid}, {$set: tuit})

const tuitsDao = {
    findAllTuits,
    createTuit,
    deleteTuit,
    updateTuit
}

export default tuitsDao;
