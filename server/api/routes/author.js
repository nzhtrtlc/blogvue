const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Author = require("../models/Author");
const { errFnc } = require("../../helper");
const checkAuth = require("../middleware/checkAuth");

const router = express.Router();

// Fetch all authors
router.get("/", (req, res, next) => {
  Author.find()
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        authors: docs
      });
    })
    .catch(e => errFnc(e, res));
});

// Fetch single author
router.get("/:authorId", checkAuth, (req, res, next) => {
  const authorId = req.params.authorId;
  Author.findById(authorId)
    .exec()
    .then(doc => {
      if (doc) res.status(200).json({ author: doc });
      else
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
    })
    .catch(e => errFnc(e, res));
});

// Create new author
router.post("/", checkAuth, (req, res, next) => {
  Author.find({ email: req.body.email })
    .exec()
    .then(author => {
      if (author.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          if (error) {
            return errFnc(error, res);
          } else {
            const author = new Author({
              ...req.body,
              _id: new mongoose.Types.ObjectId(),
              password: hash
            });
            author
              .save()
              .then(doc => {
                res.status(201).json({
                  message: "Created author successfully",
                  createdAuthor: doc
                });
              })
              .catch(e => errFnc(e, res));
          }
        });
      }
    })
    .catch(err => errFnc(err, res));
});

// Login Author
router.post("/login", (req, res, next) => {
  Author.findOne({ email: req.body.email })
    .exec()
    .then(author => {
      if (!author) {
        return res.status(401).json({
          message: "Auth Failed"
        });
      }
      bcrypt.compare(req.body.password, author.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth Failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: author.email,
              userId: author._id
            },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
          );
          return res.status(200).json({
            token,
            ...author._doc
          });
        }
        return res.status(401).json({
          message: "Auth Failed"
        });
      });
    })
    .catch(err => errFnc(err, res));
});

// Update single author
router.patch("/:authorId", checkAuth, (req, res, next) => {
  const authorId = req.params.authorId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Author.findOneAndUpdate({ _id: authorId }, { $set: updateOps }, { new: true })
    .exec()
    .then(doc =>
      res
        .status(200)
        .json({ message: "Author updated successfully", updatedAuthor: doc })
    )
    .catch(e => errFnc(e, res));
});

// Delete single author
router.delete("/:authorId", checkAuth, (req, res, next) => {
  const authorId = req.params.authorId;
  Author.remove({ _id: authorId })
    .exec()
    .then(() =>
      res.status(200).json({ message: "Author deleted successfully" })
    )
    .catch(e => errFnc(e, res));
});

// Check Token Validity
router.post("/checktoken", checkAuth, (req, res, next) => {
  res.status(200).json({ message: "Token Verified", userData: req.userData });
});

module.exports = router;
