import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur} from './entities/utilisateur.entity';
import * as bcrypt from 'bcrypt';
// import { createUserDto } from './utilisateur.Dto';
import { JwtService } from '@nestjs/jwt';



interface User{
    id:number,
    fname: string,
    username: string,
    email:string,
    password: string,

}
@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private readonly utilisateurRepository: Repository<Utilisateur>,

    ){}
    getAll():Promise<Utilisateur[]>{
        //get all 
        return this.utilisateurRepository.find();
    }
    


   
    getOne(Id :number):Promise<Utilisateur>{
        // get one user
        return this.utilisateurRepository.findOne({ where: { id: Id } });
    }
   
    async update({ Id, utilisateur }: { Id: number; utilisateur: Utilisateur; }): Promise<Utilisateur> {
        // update utilisateur
        await this.utilisateurRepository.update(Id, utilisateur);
        return this.utilisateurRepository.findOne({ where: { id: Id } });
       
    }
    async remove(id:number):Promise<void> {
        // delete utilisateur
        await this.utilisateurRepository.delete({id});
        // return 'user deleted';
    }

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            fname: user.fname,
            Uname:user.username,
            email: user.email,
            password: hash
        }
        const newUser =  this.utilisateurRepository.create(reqBody);
        await this.utilisateurRepository.save(reqBody);
        return newUser;
    }

    
    async signin(user: User, jwt: JwtService): Promise<any> {
        const foundUser = await this.utilisateurRepository.findOne({
             where :{
                email: user.email
                },
            });
        if (foundUser) {
            const { password } = foundUser;
            if (bcrypt.compare(user.password, password)) {
                const payload = {
                    id:user.id,
                    email: user.email };
                return {
                    token: jwt.sign(payload),
                };
            }
            return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    }

}
