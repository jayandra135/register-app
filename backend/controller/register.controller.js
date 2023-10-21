import RegisterModel from "../modal/register.model";
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (fs.existsSync("./uploads")) {
      cb(null, "./uploads");
    } else {
      fs.mkdirSync("./uploads");
      cb(null, "./uploads");
    }
  },
  filename: function (req, file, cb) {
    const name = file.originalname;
    const ext = path.extname(name);
    const nameArr = name.split(".");
    nameArr.pop();
    const fname = nameArr.join(".");
    const fullName = fname + "-" + Date.now() + ext;
    cb(null, fullName);
  },
});

const upload = multer({ storage: storage });

export const addRegister = (req, res) => {
  try {
    const uploadData = upload.single("resume");
    uploadData(req, res, function (error) {
      if (error) return res.status(400).json({ message: error.message });

      const { name, dob, gender, hobbies, state, address } = req.body;
      console.log(req.body);
      let resume = null;
      if (req.file !== undefined) {
        resume = req.file.filename;
      }

      const createdRecord = new RegisterModel({
        name: name,
        dob: dob,
        gender: gender,
        hobbies: hobbies,
        state: state,
        address: address,
        resume: resume,
      });

      createdRecord.save();
      if (createdRecord) {
        return res.status(201).json({
          data: createdRecord,
          message: "Success",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllRegister = async (req, res) => {
  try {
    let data = await RegisterModel.find();
    if (data) {
      return res.status(200).json({
        message: "success",
        data: data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
