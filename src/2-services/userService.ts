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

    async getByIdWithPerson(id: string) {
        try {
            let response = await this.repository.getByIdWithPerson(id)
            return response
        } catch (error) {
            return false
            //   let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'centerService-getByFilters')
            //   return response
        }
    }

    async getAllWithPersons(pagination?) {
        try {
            let response = await this.repository.getAllWithPersons(pagination)
            return response
        } catch (error) {
            return false
            //   let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'centerService-getByFilters')
            //   return response
        }
    }


    async validateMandatoryFields(userModel: UserModel) {
        // if (userModel.firstName && userModel.lastName) {
        //     console.log("First name and last name are here 🎉");
        //     return true;
        //     // return new ResultModel(200, 'OK', '', 'OK', 'addressService-validate')
        // } else {
        //     console.log("Some data is missing 😢");
        //     return false
        //     // const error = 'Ciudad, Nacion y Provincia son datos obligatorios'
        //     // let response = new ResultModel(400, error, '', error, 'addressService-validate')
        //     // return response
        // }
        return true

    }

}

export default UserService