import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All fields Required");
      error.statusCode == 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode == 409;
      return next(error);
    }
      
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password:hashedPassword,
    });

    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser = (req, res) => {};
export const LogoutUser = (req, res) => {};
export const UpdateUser = (req, res) => {};
