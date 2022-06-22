import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur} from './entities/utilisateur.entity';
import { userDto } from './utilisateur.Dto';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private  utilisateurRepository: Repository<Utilisateur>,
    ){}

    // async signup(user: Utilisateur): Promise<Utilisateur> {
    //     const salt = await bcrypt.genSalt();
    //     const hash = await bcrypt.hash(user.password, salt);
    //     const reqBody = {
    //         fullname: user.fname,
    //         email: user.email,
    //         password: hash
    //     }
    //     const newUser = new this.utilisateurRepository(reqBody);
    //     return newUser.save();
    // }
    // async signin(user: Utilisateur, jwt: JwtService): Promise<any> {
    //     const foundUser = await this.utilisateurRepository.findOne({where:
    //         {email: user.email }
    //         } );
    //     if (foundUser) {
    //         const { password } = foundUser;
    //         if (bcrypt.compare(user.password, password)) {
    //             const payload = { email: user.email };
    //             return {
    //                 token: jwt.sign(payload),
    //             };
    //         }
    //         return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    //     }
    //     return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    // }

    getAll():Promise<Utilisateur[]>{
        //get all 
        return this.utilisateurRepository.find();
    }


    async findByEmail(email: string): Promise<Utilisateur>{
        return await this.utilisateurRepository.findOne({
          where: {
            email: email,
          },
        });
    }
    getOne(Id :number):Promise<Utilisateur>{
        // get one user
        return this.utilisateurRepository.findOne({ where: { id: Id } });
    }
    async create(data : userDto){
        // create utilsateur
        const user= this.utilisateurRepository.create(data);
        await this.utilisateurRepository.save(data)
        return  user;
        
    }
    async update(Id:number ,utilisateur:Utilisateur) {
        // update utilisateur
        await this.utilisateurRepository.update(Id, utilisateur);
        return this.utilisateurRepository.findOne({ where: { id: Id } });
       
    }
    async remove(id:number):Promise<void> {
        // delete utilisateur
        await this.utilisateurRepository.delete({id});
        // return 'user deleted';
    }

}
