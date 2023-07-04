import { Pool, QueryResult } from "pg";
class UserRepository {
    constructor(private pool: Pool) {}

    async selectUsersById(id: string): Promise<QueryResult>  {
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
    
        const { rows } = await this.pool.query(query, values);
        return rows[0];
    }
    async selectAllUsers ():Promise<QueryResult>{
        const query = 'SELECT * FROM users';
        
    
        const { rows } = await this.pool.query(query);
        return rows[0];

    }
    async insertUsers(username:string , password:string , email:string): Promise<QueryResult> {
        const query = 'INSERT INTO users (username , password, email) VALUES ($1,$2,$3) RETURNING id';
        const values = [username, password, email];
        const { rows } = await this.pool.query(query, values);
        return rows[0];

    }

}


export default UserRepository