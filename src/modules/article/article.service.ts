import { ArticleRepo } from "./article.repo";

export const ArticleService = {
    create: (data: any) => ArticleRepo.create(data),
    getAll: () => ArticleRepo.findAll(),
    getById: (id: number) => ArticleRepo.findById(id),
    update: (id: number, data: any) => ArticleRepo.update(id, data),
    delete: (id: number) => ArticleRepo.delete(id),
    search: (query: string) => ArticleRepo.search(query),
};
