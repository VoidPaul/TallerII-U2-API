import { Router } from "express"
import {
  newComment,
  getComments,
  getCommentById,
  removeComment,
} from "./comment.controller.js"
import {
  newCommentValidator,
  getCommentByIdValidator,
  removeCommentValidator,
} from "../middleware/validate-comment.js"

const router = Router()

router.post("/:pid/new", newCommentValidator, newComment)

router.get("/:pid/comments", getComments)

router.get("/:pid/:cid", getCommentByIdValidator, getCommentById)

router.delete("/remove", removeCommentValidator, removeComment)

export default router
