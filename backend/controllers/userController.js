import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "Username already exists. Please choose a different username." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullName,
      username,
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });
    
    return res.status(201).json({
      msg: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};
//Define a function to test the database connection
// const testConnection = async () => {
//   try {
//     // Attempt to find any user in the database
//     const user = await User.findOne({});
//     console.log("Database connection successful.");
//     console.log("Found user:", user);
//   } catch (error) {
//     console.error("Error connecting to database:", error);
//   }
// };

// // Call the testConnection function to test the connection
// testConnection();


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ msg: "Incorrect username or password" });
    }

    const tokenData = {
      userId:user._id
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePhoto: user.profilePhoto,
      // gender: existingUser.gender
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};

export const logout =  (req, res) => {
  try{
    return res.status(200).cookie("token", "",{maxAge:0}).json({
      msg: "Logged out successfully"
      
    })

  }
  catch(error){
    console.log(error);
        // return res.status(500).json({ msg: "Server Error" });

  }
}
export const getOtherUsers = async (req, res) => {
  try {
      const loggedInUserId = req.id;
      const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

      if (otherUsers.length === 0) {
          return res.status(200).json('[]');
      }

      return res.status(200).json(otherUsers);
  } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal Server Error" });
  }
};
