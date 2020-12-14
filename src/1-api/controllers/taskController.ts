import { Controller, Post, Get, Delete, Put } from '@decorators/express';
import { Request, Response } from "express";
import { PersonService } from '../../2-services';
import TaskService from '../../2-services/taskService';
import { PersonModel } from '../models/person';
import { TaskModel } from '../models/task';

@Controller('/task')
class TaskController {
    private service: TaskService;
    private personService: PersonService

    constructor() {
        this.service = new TaskService();
        this.personService = new PersonService();
    }

    @Post('/')
    async create(req: Request, res: Response) {
        const task = new TaskModel(req.body);
        const person = new PersonModel(await this.personService.getById(req.body.personId));
        task.person = person;
        const responseValidation = await this.service.validateMandatoryFields(task);
        if (responseValidation) {
            this.service.create(task).then(response => {
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

    @Get('/person/:id')
    async getByPersonId(req: Request, res: Response) {
        this.service.getByPersonId(req.params.id).then(response => {
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
        const task = new TaskModel(req.body);
        const id = req.params.id;
        task.id = id;
        const responseValidation = await this.service.validateMandatoryFields(task);
        if (responseValidation) {
            this.service.update(id, task).then(response => {
                // res.status(response.statusCode).send(response)
                res.send(response);
            })
        } else {
            res.send("A problem occurred while performing this action ✖");
        }
    }
}

export { TaskController }