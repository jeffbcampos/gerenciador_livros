import { PrismaClient } from "@prisma/client"
import { ILivro } from "../../models/ILivro.model";

export class GetAllBooksRepository {
    private static instance: GetAllBooksRepository
    constructor(
        private readonly prisma: PrismaClient
    ) {}

    public static createInstance(): GetAllBooksRepository {
        if(!GetAllBooksRepository.instance) {
            const prisma = new PrismaClient();
            GetAllBooksRepository.instance = new GetAllBooksRepository(prisma)
        }
        return this.instance
    }

    async getAllBooks(): Promise<ILivro[]> {
        return await this.prisma.livro.findMany();
    }
}