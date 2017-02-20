import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AuthorService } from './author.service';
import { AuthorActionTypes , loadAuthorsSuccess , addAuthorSuccess} from './actions';

@Injectable()
export class AuthorEffects {

    constructor(
        private actions$: Actions,
        private authorService: AuthorService
    ) { }

    @Effect() authors$ = this.actions$
        .ofType(AuthorActionTypes.LOAD_AUTHORS)
        .mergeMap(() => this.authorService.loadAuthors())
        .map(authors => loadAuthorsSuccess(authors));

    @Effect() addAuthor$ = this.actions$
        .ofType(AuthorActionTypes.ADD_AUTHOR)
        .mergeMap((action) => this.authorService.addAuthor(action.payload))
        .map(author => addAuthorSuccess(author));
}