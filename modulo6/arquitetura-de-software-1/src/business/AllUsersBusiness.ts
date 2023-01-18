import { UserDatabase } from '../data/UserDatabase'

export class UserBusiness {
    getAllUsers = async (): Promise<user[]> => {
        return await new UserDatabase().get()
    };
}