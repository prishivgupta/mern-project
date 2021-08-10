import express, { Router } from "express";
import { getPosts, createPosts, updatePost } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.put('/', createPosts);
postRouter.patch('/:id',updatePost);

export default postRouter;