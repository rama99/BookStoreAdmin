import { AuthorModel } from '../author/author-model';
import { CategoryModel } from '../category/category-model';

export interface BookModel {

    id: number;
    title: string;
    description: string;
    category: CategoryModel;
    authors: AuthorModel[];
    price: number;
}