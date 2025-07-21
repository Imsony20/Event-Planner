import Con from "../models/ContactModel.js";

export const Contact = async (req, res, next) => {
  try {
    const { name, email,subject, message } = req.body;

    if (!name || !email || !message || !subject) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    
    const newcondata = await Con.create({
      name,
      email,
      subject,
      message,
    });


    res
      .status(201)
      .json({ message: "Message Sent Successfully", data: newcondata });
  } catch (error) {
    next(error);
  }
};