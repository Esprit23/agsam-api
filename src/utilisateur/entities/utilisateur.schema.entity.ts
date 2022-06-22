import { EntitySchema } from 'typeorm';
import { UtilisateurEntity } from './utilisateur.entity';

export const UserSchema = new EntitySchema<UtilisateurEntity>({
    name: 'User',
    target: UtilisateurEntity,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      fname: {
        type: String,
      },
      username: {
        type: String,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
    },
    relations: {
      profile: {
        type: 'one-to-many',
        target: 'profilId', // the name of the PhotoSchema
      },
    },
  });