import { Pool } from "pg";
import UserRepository from '../repositories/user.repository'


 const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'usersPOCDB',
    password: 'root',
    port: 5432,
  });
const userRepository = new UserRepository(pool)

class UserService{
    async selectUserById (id:string){
            return userRepository.selectUsersById(id)
    }
    async selectAllUsers (){
      return userRepository.selectAllUsers()
    }
    async insertUsers(username:string, password:string, email:string){
       return userRepository.insertUsers(username, password, email)
    }
}


export default UserService