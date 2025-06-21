import { NextFunction, Request, Response } from "express";
import { GetAllBooksService } from "../../services/get-all-books.service";
import { GetAllBooksRepository } from "../../repositories/books/get-all-book.repository";
import { getAllbooksServiceUseCase } from "../../services/factories/get-all-books.service.factory";

export class GetAllBooksController {
    constructor(
        private readonly getAllbooksService: GetAllBooksService
    ) {}

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const usecase = getAllbooksServiceUseCase()
            const result = await usecase.execute()
            res.status(200).send(result)
        } catch (error) {
            next(error)
        }
        
    }
}