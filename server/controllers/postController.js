import Posts from "../models/postModel.js";

export const getPosts = async (req,res) => {

    try {

        posts = await Posts.find();

        res.status(200).json(posts)

    } catch (error) {

        res.status(404).json({message: error.message})

    }
}

export const createPosts = (req,res) => {

    const post = req.body;

    const newPost = new Posts(post);

    try {

        await newPost.save()

        res.status(201).json(newPost)

    } catch (error) {

        res.status(409).json({message: error.message})

    }

}