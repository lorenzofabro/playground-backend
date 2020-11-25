import BaseService from './baseService'
import { UserRepository } from '../3-data/repositories'
import { UserModel } from "../1-api/models/user"
// import { ResultModel } from '../1-api/models/errorLog'

class UserService extends BaseService {
    private repository: UserRepository

    constructor() {
        const repository = new UserRepository()
        super(repository)
        this.repository = repository
    }

    async validateMandatoryFields(userModel: UserModel) {
        if (userModel.firstName && userModel.lastName) {
            console.log("First name and last name are here 🎉");
            return true;
            // return new ResultModel(200, 'OK', '', 'OK', 'addressService-validate')
        } else {
            console.log("Some data is missing 😢");
            return false
            // const error = 'Ciudad, Nacion y Provincia son datos obligatorios'
            // let response = new ResultModel(400, error, '', error, 'addressService-validate')
            // return response
        }

    }

}

export default UserService