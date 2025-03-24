import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/userService";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullname } = req.body;
    const userData = await registerUser(email, password, fullname);
    res.status(201).json({ message: "Đăng ký thành công", data: userData });
  } catch (error) {
    res
      .status(400)
      .json({
        message:
          error instanceof Error ? error.message : "Lỗi server khi đăng ký",
      });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userData = await loginUser(email, password);
    res.status(200).json({ message: "Đăng nhập thành công", data: userData });
  } catch (error) {
    res
      .status(400)
      .json({
        message:
          error instanceof Error ? error.message : "Lỗi server khi đăng nhập",
      });
  }
};
