import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({

    username: {type: String,required: true},

    email: {type: String,required: true},

    country: {type: String,required: true},
})

export class UserEntity {

    id: string;

    username: string;

    email: string;

    country: string

}