import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave')
  leaveToggle() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  constructor() { }

}
