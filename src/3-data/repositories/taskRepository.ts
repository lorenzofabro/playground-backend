import { getManager } from 'typeorm'
import { Task } from '../entities/Task'
import BaseRepository from './baseRepository'


class TaskRepository extends BaseRepository {

  constructor() {
    super(Task)
    this.manager = getManager()
  }

  async getByPersonId(id: number, pagination?) {
    try {
      let query = await this.manager.getRepository(this.entity).createQueryBuilder();
      if (pagination) {
        query.skip(pagination.startIn)
        query.take(pagination.pageSize)
      }
      query.where("Task.person.id = :id", {id: id});
      let entities = await query.getManyAndCount();
      const result = {
        data: entities[0],
        meta: {
          rowsCount: entities[1]
        }
      }
      return result

    } catch (error) {
      console.log(error);
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'centerRepository-getByFilters')
      // return response
    }
  }

}

export default TaskRepository;