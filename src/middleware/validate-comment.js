import { body, param } from "express-validator"
import { commentExists } from "../helpers/validate-database.js"
import { validateFields, handleErrors } from "./error-handler.js"

export const newCommentValidator = [validateFields, handleErrors]
export const getCommentByIdValidator = [validateFields, handleErrors]
export const removeCommentValidator = [validateFields, handleErrors]
