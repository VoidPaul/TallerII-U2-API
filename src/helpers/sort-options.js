const allowedParams = ["name", "course", "createdAt"]

export const getSortOptions = (req) => {
  const { sort, order } = req.query

  if (
    !sort ||
    !allowedParams.includes(req.query.sort) ||
    !order ||
    !["asc", "desc"].includes(req.query.order)
  ) {
    return { _id: 1 }
  }

  const sortOrder = req.query.order === "desc" ? -1 : 1
  return { [sort]: sortOrder }
}
