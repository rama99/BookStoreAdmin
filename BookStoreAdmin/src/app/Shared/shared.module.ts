import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeysPipe } from './keys.pipe';
import { RupeePipe } from './rupee.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [KeysPipe, RupeePipe],
    declarations: [KeysPipe , RupeePipe],
    providers:[]
})

export class SharedModule { }