import { validationResult } from "express-validator"

export const validateFields = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(errors)
  }
  next()
}

export const handleErrors = (err, req, res, next) => {
  if (err.status === 400 || err.errors) {
    return res.status(400).json({
      success: false,
      errors: err.errors,
    })
  }
  return res.status(500).json({
    success: false,
    message: err.message,
  })
}
