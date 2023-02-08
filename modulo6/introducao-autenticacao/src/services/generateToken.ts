import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

const expiresIn = "1min";
const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}