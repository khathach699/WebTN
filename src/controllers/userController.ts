import User from "../schemas/User";
import dotenv from "dotenv";
dotenv.config();

const register = async (req: any, res: any) => {
  const body = req.body;
  const { email, password, fullname } = body;
  console.log(body);

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const newUser = new User(body);
    await newUser.save();
    res.status(200).json({
      message: "Đăng ký thành công",
      data: newUser,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: error.message || "Lỗi server khi đăng ký",
    });
  }
};

export { register };
