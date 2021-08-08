import express, { Router } from "express";
import { getPosts, createPosts } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.put('/', createPosts);

export default postRouter;