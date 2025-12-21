import { ArticleService } from "../modules/article/article.service";

export const resolvers = {
    Query: {
        articles: () => ArticleService.getAll(),
        article: (_: any, args: { id: number }) => ArticleService.getById(args.id),
    },
};
