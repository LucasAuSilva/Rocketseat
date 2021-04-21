import { getCustomRepository, Repository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"
import { User } from "../entities/User"


class UsersService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UserRepository)
    }

    async create(email: string) {
        // verify if the users exists if not exists save in the DataBase
        const userExist = await this.userRepository.findOne({
            email
        })
        
        // if exits, return user
        if(userExist) {
            return userExist;
        }
        
        // if not exists save in the DataBase
        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user)

        return user;
    }
}

export { UsersService }