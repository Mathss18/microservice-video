import {v4 as uuid} from 'uuid';
import { validate as uuidValidator } from "uuid";
import InvalidUuidError from '../errors/invalid-uuid.error';

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = this.id || uuid();
    this.validate();
  }

  private validate(){
    const isValid = uuidValidator(this.id);
    if(!isValid){
        throw new InvalidUuidError();
    }
    return;
  }

}
