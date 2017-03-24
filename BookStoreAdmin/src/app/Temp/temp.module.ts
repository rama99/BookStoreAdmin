import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TempComponent } from './temp.component';

@NgModule({
    imports: [SharedModule],
    exports: [TempComponent],
    declarations: [TempComponent],
    providers:[]
})

export class TempModule { }