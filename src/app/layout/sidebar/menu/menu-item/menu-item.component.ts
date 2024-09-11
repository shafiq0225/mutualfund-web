import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('children', [
        state('collapsed', style({
            height: '0'
        })),
        state('expanded', style({
            height: '*'
        })),
        transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class MenuItemComponent implements OnInit {
  
  @Input({ required: true }) item: any;
  @Input({ required: true }) index!: number;
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  @Input() parentKey!: string;
  active: any;
  key: string = "";
  get submenuAnimation() {
    return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
}


ngOnInit(): void {
  this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
}

}
