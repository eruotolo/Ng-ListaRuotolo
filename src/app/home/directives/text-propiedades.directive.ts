import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextPropiedades]'
})
export class TextPropiedadesDirective {
    constructor(public elementRef: ElementRef, public renderer: Renderer2) {
        this.setColor();
        this.setFontSize();
        this.setFontFamily();
        this.setLineHeight()
    }

    setColor(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
    }
    setFontSize(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px')
    }
    setFontFamily(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-family', 'Helvetica')
    }
    setLineHeight(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'line-height', '24px')
    }

}
