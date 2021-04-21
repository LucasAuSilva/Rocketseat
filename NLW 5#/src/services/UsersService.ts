import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"


class UsersService {
    async create(email: string) {
        const userRepository = getCustomRepository(UserRepository)
        // verify if the users exists if not exists save in the DataBase

        const userExist = await userRepository.findOne({
            email
        })
        
        // if exits, return user
        if(userExist) {
            return userExist;
        }
        
        // if not exists save in the DataBase
        const user = userRepository.create({
            email
        })

        await userRepository.save(user)

        return user;
    }
}

export { UsersService }