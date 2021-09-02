import express, { Router } from "express";
import { getPosts, createPosts, updatePost, deletePost, likePost } from "../controllers/postController.js";
import auth from "../middleware/authMiddleware.js";

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.put('/', auth, createPosts);
postRouter.patch('/:id',auth, updatePost);
postRouter.delete('/:id', auth, deletePost);
postRouter.patch('/:id/likePost', auth, likePost);

export default postRouter;