/**
 * BaseRepository: Clase encargada de encapsular el comportamiento 
 * generalizado de la capa de acceso a los datos
 */
import { getManager } from 'typeorm'
// import { ResultModel } from '../../1-api/models/errorLog'

class BaseRepository {
  private entity: any
  manager: any

  constructor(Entity) {
    this.entity = Entity
    this.manager = getManager()
  }

  async create(entityToCreate) {
    try {
      let result = await this.manager.getRepository(this.entity).save(entityToCreate)
      // let response = new ResultModel(201, 'Registro creado con Exito.', result)
      // return response
      return result
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-create')
      // return response
      return error
    }
  }

  async update(id, entityToUpdate) {
    try {
      let query = this.manager.createQueryBuilder()
        .update(this.entity)
        .set(entityToUpdate)
        .where('id = :id', { id: String(id) })
      await query.execute()
      let entityUpdated = await this.getById(id)
      // let response = new ResultModel(202, 'Registro modificado con Exito.', entityUpdated)
      // return response
      return entityUpdated
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-update')
      // return response
      return error
    }
  }

  async delete(id) {
    try {
      let query = this.manager.createQueryBuilder()
        .delete()
        .from(this.entity)
        .where('id = :id', { id: id })
      let result = await query.execute()
      // let response = new ResultModel(200, 'Registro eliminado con Exito.', result)
      // return response
      return result
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-delete')
      // return response
      return error
    }
  }

  //Alta y baja lógica
  async logicalEnable(id, userId, status) {
    try {
      let query = this.manager.createQueryBuilder()
        .update(this.entity)
        .set({
          isEnabled: status,
          lastUpdateByUserId: userId
        })
        .where('id = :id', { id: id })
      let result = await query.execute()
      // let response = new ResultModel(202, 'Registro '+ (status ? 'activada' : 'desactivada') +' con Exito.', result)
      // return response
      return result
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-logicalEnable')
      // return response
      return error
    }
  }

  async getAll(pagination?) {
    try {
      let query = this.manager.getRepository(this.entity)
        .createQueryBuilder()

      if (pagination) {
        query.skip(pagination.startIn)
        query.take(pagination.pageSize)
      }

      let entities = await query.getManyAndCount()
      const result = {
        data: entities[0],
        meta: {
          rowsCount: entities[1]
        }
      }
      // let response
      if (result.meta.rowsCount > 0) {
        // response = new ResultModel(200, 'Registros consultados con éxito.', result)
      } else {
        // response = new ResultModel(404, 'No se encontró ningún registro.', result)
      }
      // return response
      return result
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-getAll')
      // return response
      return error
    }
  }

  async getById(id) {
    try {
      let query = this.manager.getRepository(this.entity)
        .createQueryBuilder('entity')
        .where('entity.id = :id', { id: id })
      const entity = await query.getOne()
      // let response
      if (entity) {
        // response = new ResultModel(200, 'Registro consultado con éxito.', entity)
      } else {
        // response = new ResultModel(404, 'No se encontró el registro.', entity)
      }
      // return entity
      return entity
    } catch (error) {
      // let response = new ResultModel(500, 'Ocurrió un error al realizar esta acción.', '', error, 'BaseRepository-getById')
      // return response
      return error
    }
  }

}

export default BaseRepository