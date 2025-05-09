import { body, param } from "express-validator"
import { postExists } from "../helpers/validate-database.js"
import { validateFields, handleErrors } from "./error-handler.js"

export const newPostValidator = [validateFields, handleErrors]
export const getPostByIdValidator = [validateFields, handleErrors]
export const updatePostValidator = [validateFields, handleErrors]
export const removePostValidator = [validateFields, handleErrors]
