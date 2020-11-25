class BaseService {
    private entityRepository: any

    constructor(EntityRepository) {
        this.entityRepository = EntityRepository
    }

    async getAll(pagination?) {
        const entities = await this.entityRepository.getAll(pagination)
        return entities
    }

    async getById(id) {
        const entity = await this.entityRepository.getById(id)
        return entity
    }

    async create(entity) {
        const createdEntity = await this.entityRepository.create(entity)
        return createdEntity
    }

    async update(id, entity) {
        const updatedEntity = await this.entityRepository.update(id, entity)
        return updatedEntity
    }

    async delete(id) {
        const deletedEntity = await this.entityRepository.delete(id)
        return deletedEntity
    }

    async logicalEnable(id, userId, status) {
        const enabledEntity = await this.entityRepository.logicalEnable(id, userId, status)
        return enabledEntity
    }

}

export default BaseService