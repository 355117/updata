const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
/* ------------------------- 写入模型 ------------------------------------- */
var uploading = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("../project_sz-master/public/model/private"));
      // cb(null, path.resolve("D:\\ccg\\example_2\\public\\model"));
    },
    filename: function (req, file, cb) {
      const { fieldname, originalname, encoding, mimetype } = file;
      // const after = originalname.split('.')[1] ? '.' + originalname.split('.')[1] : '.jpg'
      cb(null, originalname);
    },
  }),
});
app.post("/uploadModel", uploading.any(), (req, res) => {
  res.send("req");
});
/* ------------------------- 写入图片 ------------------------------------- */
var uploading_1 = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("../project_sz-master/src/assets/images"));
      // cb(null, path.resolve("D:\\ccg\\example_2\\src\\assets\\images"));
    },
    filename: function (req, file, cb) {
      const { fieldname, originalname, encoding, mimetype } = file;
      // const after = originalname.split('.')[1] ? '.' + originalname.split('.')[1] : '.jpg'
      cb(null, originalname);
    },
  }),
});
app.post("/uploadImg", uploading_1.any(), (req, res) => {
  res.send("req");
});

/* ------------------------- 写入JSON文件 ------------------------------------- */
var uploading_2 = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("../project_sz-master/public/json"));
      // cb(null, path.resolve("D:\\ccg\\example_2\\public\\json"));
    },
    filename: function (req, file, cb) {
      const { fieldname, originalname, encoding, mimetype } = file;
      // const after = originalname.split('.')[1] ? '.' + originalname.split('.')[1] : '.jpg'
      cb(null, originalname);
    },
  }),
});
app.post("/uploadJson", uploading_2.any(), (req, res) => {
  res.send("req");
});
/* ------------------------- 写入图片到私有库 ------------------------------------- */
var uploading_3 = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("../project_sz-master/src/assets/private_scene_img"));
      // cb(null, path.resolve("D:\\ccg\\example_2\\src\\assets\\images"));
    },
    filename: function (req, file, cb) {
      const { fieldname, originalname, encoding, mimetype } = file;
      // const after = originalname.split('.')[1] ? '.' + originalname.split('.')[1] : '.jpg'
      cb(null, originalname);
    },
  }),
});
app.post("/uploadPrivateImg", uploading_3.any(), (req, res) => {
  res.send("req");
});
app.listen(3000, () => {
  console.log("服务器已启动");
});
