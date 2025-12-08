import bcrypt from "bcryptjs";

export const hashPassword = (pwd: string) => bcrypt.hashSync(pwd, 10);
export const comparePassword = (pwd: string, hash: string) => bcrypt.compareSync(pwd, hash);
