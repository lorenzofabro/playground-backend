import { getManager } from 'typeorm'
import { User } from '../entities/User'
import BaseRepository from './baseRepository'


class UserRepository extends BaseRepository {

  constructor() {
    super(User)
    this.manager = getManager()
  }

  async getByIdWithPerson(id: string) {
    try {
      let query = this.manager.getRepository(this.entity)
        .createQueryBuilder('entity')
        .where('entity.id = :id', { id: id })
        .innerJoinAndSelect("entity.person", "person");
      const entity = await query.getOne()
      return entity

    } catch (error) {
      console.log(error);
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'centerRepository-getByFilters')
      // return response
    }
  }

  async getAllWithPersons(pagination?) {
    try {
      let query = await this.manager.getRepository(this.entity).createQueryBuilder();
      if (pagination) {
        query.skip(pagination.startIn)
        query.take(pagination.pageSize)
      }
      query.innerJoinAndSelect("User.person", "person");
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

export default UserRepository;