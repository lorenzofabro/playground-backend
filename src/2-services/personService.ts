import BaseService from './baseService'
import { PersonRepository } from '../3-data/repositories'
import { PersonModel } from "../1-api/models/person"
// import { ResultModel } from '../1-api/models/errorLog'

class PersonService extends BaseService {
    private repository: PersonRepository

    constructor() {
        const repository = new PersonRepository()
        super(repository)
        this.repository = repository
    }

    async validateMandatoryFields(personModel: PersonModel) {
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

export default PersonService