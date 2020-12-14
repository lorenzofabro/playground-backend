import { Controller, Post, Get, Delete, Put } from '@decorators/express';
import { Request, Response } from "express";
import { PersonService } from '../../2-services';
import { PersonModel } from '../models/person';

@Controller('/person')
class PersonController {
    private service: PersonService;

    constructor() {
        this.service = new PersonService();
    }

    @Post('/')
    async create(req: Request, res: Response) {
        const person = new PersonModel(req.body);
        const responseValidation = await this.service.validateMandatoryFields(person);
        if (responseValidation) {
            this.service.create(person).then(response => {
                // res.status(response.statusCode).send(response)
                res.send(response);
            })
        } else {
            res.send("A problem occurred while performing this action ✖");
        }
    }

    @Delete('/:id')
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        this.service.delete(id).then(response => {
            res.send(response);
        }).catch((error) => {
            res.send("A problem occurred while performing this action ✖")
            console.error(error);
        })
    }

    @Get('/')
    async getAll(req: Request, res: Response) {
        this.service.getAll().then(response => {
            res.send(response);
        }).catch((error) => {
            res.send("A problem occurred while performing this action ✖");
            console.error(error);
        })
    }

    @Get('/:id')
    async getById(req: Request, res: Response) {
        const id = req.params.id;
        this.service.getById(id).then(response => {
            res.send(response);
        }).catch((error) => {
            res.send("A problem occurred while performing this action ✖");
            console.error(error);
        })
    }

    @Put('/:id')
    async update(req: Request, res: Response) {
        const person = new PersonModel(req.body);
        const id = req.params.id;
        person.id = id;
        const responseValidation = await this.service.validateMandatoryFields(person);
        if (responseValidation) {
            this.service.update(id, person).then(response => {
                // res.status(response.statusCode).send(response)
                res.send(response);
            })
        } else {
            res.send("A problem occurred while performing this action ✖");
        }
    }
}

export { PersonController }