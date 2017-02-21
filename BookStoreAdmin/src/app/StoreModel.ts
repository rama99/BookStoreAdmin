import { AuthorModel } from './author/author-model';
import { CategoryModel } from './category/category-model';
import { BookModel } from './book/book-model';
import { LoginModel } from './login-model';

export interface StoreModel {
    authors: AuthorModel,
    categories: CategoryModel,
    books: BookModel,
    user: LoginModel
}
