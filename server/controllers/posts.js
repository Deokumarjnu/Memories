import postMessage from "../models/postMessage.js"

export const getPost = async(req, res, next) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch(e) {
        res.status(500).json({message: e.message})
    }
}

export const createPost = async(req, res, next) => {
    const post = req.body;
    const newPost = new postMessage(post);

    try{
        await postMessage.save();
        res.status(201).json(newPost);
    } catch(e) {
        res.status(500).json({message: e.message})
    }

}