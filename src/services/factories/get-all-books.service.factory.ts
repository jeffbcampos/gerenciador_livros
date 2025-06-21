import { GetAllBooksRepository } from "../../repositories/books/get-all-book.repository";
import { GetAllBooksService } from "../get-all-books.service";

export const getAllbooksServiceUseCase = (): GetAllBooksService => {
    const getAllBookRepository = GetAllBooksRepository.createInstance();
    return new GetAllBooksService(getAllBookRepository);
}