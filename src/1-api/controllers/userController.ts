import { getRepository } from "typeorm";
import { Controller, Post, Get, Delete, Put } from '@decorators/express';
import { User } from "../../3-data/entities/User";
import { Request, Response } from "express";

@Controller('/user')
class UserController {
    repository: any;
    constructor() {
        this.repository = getRepository(User);
    }

    @Post('/')
    async create(req: Request, res: Response) {
        const user = await this.repository.create(req.body);
        const results = await this.repository.save(user);
        return res.send(results);
    }

    @Delete('/:id')
    async delete(req: Request, res: Response) {
        const results = await this.repository.delete(req.params.id);
        return res.send(results);
    }

    @Get('/')
    async getAll(req: Request, res: Response) {
        const users = await this.repository.find();
        res.json(users);
    }

    @Get('/:id')
    async getById(req: Request, res: Response) {
        const results = await this.repository.findOne(req.params.id);
        return res.send(results);
    }

    @Put('/:id')
    async update(req: Request, res: Response) {
        const user = await this.repository.findOne(req.params.id);
        this.repository.merge(user, req.body);
        const results = await this.repository.save(user);
        return res.send(results);
    }
}

export {UserController}