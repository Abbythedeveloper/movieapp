// const service = require("./reviews.service.js");
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// async function postExists(req, res, next) {
//   const { postId } = req.params;
//   const post = await service.read(postId);
//   if (post) {
//     res.locals.post = post;
//     return next();
//   }
//   return next({ status: 404, message: `Review cannot be found.` });
// }

// async function destroy(req, res) {
//   await service.delete(res.locals.post.post_id);
//   res.sendStatus(204);
// }
// //The server should respond with `204 No Content`.

// module.exports = {
//   create: asyncErrorBoundary(create),
//   update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
//   delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
// };
