import express, { Router } from "express";
import { getPosts, createPosts, updatePost, deletePost, likePost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.put('/', createPosts);
postRouter.patch('/:id',updatePost);
postRouter.delete('/:id',deletePost);
postRouter.patch('/:id/likePost',likePost);

export default postRouter;