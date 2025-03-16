import AsyncHandler from "express-async-handler"

import User from '../DB/models/user.js'

export const RegisterUser = AsyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    
    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "User already exists" });
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      user = new User({ name, email, password: hashedPassword });
      await user.save();
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
      
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  });
  