import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [],
    exports: [ RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule
    ],
    declarations: [],
    providers:[]
})

export class SharedModule { }