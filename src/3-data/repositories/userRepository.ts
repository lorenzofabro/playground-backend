import { getManager } from 'typeorm'
import { User } from '../entities/User'
import BaseRepository from './baseRepository'


class UserRepository extends BaseRepository {

  constructor() {
    super(User)
    this.manager = getManager()
  }

}

export default UserRepository;