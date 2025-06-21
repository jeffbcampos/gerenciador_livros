import { ILivro } from "../models/ILivro.model";
import { GetAllBooksRepository } from "../repositories/books/get-all-book.repository";

export type Output = ILivro[]

export class GetAllBooksService {
    constructor(
        private readonly repository: GetAllBooksRepository
    ) {}

    async execute() {
        return await this.repository.getAllBooks();
    }
}