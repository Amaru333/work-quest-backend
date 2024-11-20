const CommentModel = require("../models/comment");

module.exports = {
  addComment: async (req, res) => {
    try {
      const comment = new CommentModel(req.body);
      await comment.save();
      const populatedComment = await CommentModel.findById(comment._id).populate(
        "user",
        "_id name avatar"
      );
      res.json(populatedComment);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  getCommentByJob: async (req, res) => {
    const jobId = req.params.jobId;
    try {
      const comments = await CommentModel.find({ job: jobId }).populate("user", "_id name avatar");
      res.json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
