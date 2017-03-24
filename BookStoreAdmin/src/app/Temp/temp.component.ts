import { Component, OnInit, DoCheck, ChangeDetectorRef , ChangeDetectionStrategy , NgZone} from '@angular/core';

@Component({
    selector: 'temp',
    template: `

{{count}}

<button (click)="click()">Button 2 </button>

`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TempComponent implements OnInit , DoCheck {

    constructor(
        private cd: ChangeDetectorRef,
        private zone:NgZone
    ) {
        setInterval(() => {
            this.count = this.count + 1;
            this.cd.markForCheck();
        }, 1000);
       
    }
    count: number = 0;

    ngOnInit() {

     
    }

    ngDoCheck() {
        console.log('Do Check');
    }

 

    click() {  
       
    }
}