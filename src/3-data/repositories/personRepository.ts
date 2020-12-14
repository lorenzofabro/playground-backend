import { getManager } from 'typeorm'
import { Person } from '../entities/Person'
import BaseRepository from './baseRepository'


class PersonRepository extends BaseRepository {

  constructor() {
    super(Person)
    this.manager = getManager()
  }

}

export default PersonRepository;