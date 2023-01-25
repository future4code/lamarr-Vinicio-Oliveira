import { UserDatabase } from "../data/UserDatabase"
import { createUserDTO } from "../model/createUserDTO"
import { CustomError } from "../error/CustomError"
import { InvalidEmail, InvalidPassword } from "../error/UserErrors"
import { generateId } from "../services/idGenerated"

export class UserBusiness {
  public create = async (input: createUserDTO) => {
    try {
      
      const userDatabase = new UserDatabase()
      const  { email, name, password } = input
      if (!email || !name || !password) {
        throw new CustomError(400, "Dados inválidos (email, name, password)")
      }

      if(!email.includes("@")){
        throw new InvalidEmail();        
      }

      if(password.length <= 6) {
        throw new InvalidPassword();        
      }

      const id = generateId()

      const user = {
        id,
        name,
        email,
        password
      }

      await userDatabase.create(user)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
      
    }
  }

  public getUsers = async () => {
    try {
      const userDatabase = new UserDatabase()
      console.log("Estou aqui!!!");

      return userDatabase.getUsers();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}
