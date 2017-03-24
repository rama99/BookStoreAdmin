import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { KeysPipe } from './keys.pipe';
import { RupeePipe } from './rupee.pipe';

@NgModule({
    imports: [CommonModule, HttpModule],
    exports: [KeysPipe, RupeePipe, CommonModule, HttpModule, FormsModule , ReactiveFormsModule],
    declarations: [KeysPipe , RupeePipe],
    providers:[]
})

export class SharedModule { }