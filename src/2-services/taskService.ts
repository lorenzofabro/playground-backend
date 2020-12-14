import { TaskModel } from '../1-api/models/task'
import TaskRepository from '../3-data/repositories/taskRepository'
import BaseService from './baseService'
// import { ResultModel } from '../1-api/models/errorLog'

class TaskService extends BaseService {
    private repository: TaskRepository

    constructor() {
        const repository = new TaskRepository()
        super(repository)
        this.repository = repository
    }

    async getByPersonId(filters) {
        try {
            let response = await this.repository.getByPersonId(filters)
            return response
        } catch (error) {
            return false
            //   let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'centerService-getByFilters')
            //   return response
        }
    }

    async validateMandatoryFields(taskModel: TaskModel) {
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

export default TaskService