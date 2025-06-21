import { Router } from "express";
import { GetAllBooksController } from "../../controllers/books/get-all-book.controller";
import { GetAllBooksService } from "../../services/get-all-books.service";
import { GetAllBooksRepository } from "../../repositories/books/get-all-book.repository";

const router = Router()

const getAllBooksRepository = GetAllBooksRepository.createInstance()
const getAllBooksService = new GetAllBooksService(getAllBooksRepository)
const getAllbooksController = new GetAllBooksController(getAllBooksService)

router.get('/books', getAllbooksController.get)

export default router;