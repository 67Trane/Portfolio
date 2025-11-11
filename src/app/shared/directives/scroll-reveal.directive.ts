import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type ScrollDirection = 'left' | 'right' | 'up' | 'down' | 'fade' | 'zoom';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    @Input('appScrollReveal') direction: ScrollDirection = 'up';
    @Input() delay: number = 0; // Delay in ms für staggered animations
    @Input() duration: 'duration-300' | 'duration-500' | 'duration-700' | 'duration-1000' = 'duration-700';
    @Input() threshold: number = 0.2; // Wie viel muss sichtbar sein (0-1)

    private observer?: IntersectionObserver;
    private timeoutId?: number;

    constructor(
        private el: ElementRef<HTMLElement>,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        const nativeEl = this.el.nativeElement;

        // Base animation classes
        this.addClass(nativeEl, 'opacity-0');
        this.addClass(nativeEl, 'transition-all');
        this.addClass(nativeEl, this.duration);
        this.addClass(nativeEl, 'ease-out');
        this.addClass(nativeEl, 'will-change-transform');

        // Direction specific starting transform
        switch (this.direction) {
            case 'left':
                this.addClass(nativeEl, '-translate-x-10');
                break;
            case 'right':
                this.addClass(nativeEl, 'translate-x-10');
                break;
            case 'up':
                this.addClass(nativeEl, 'translate-y-10');
                break;
            case 'down':
                this.addClass(nativeEl, '-translate-y-10');
                break;
            case 'zoom':
                this.addClass(nativeEl, 'scale-90');
                break;
            case 'fade':
                break;
        }

        // Setup IntersectionObserver
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Optional delay für staggered effect
                        if (this.delay > 0) {
                            this.timeoutId = window.setTimeout(() => {
                                this.reveal(nativeEl);
                            }, this.delay);
                        } else {
                            this.reveal(nativeEl);
                        }
                        this.observer?.unobserve(nativeEl);
                    }
                });
            },
            {
                threshold: this.threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.observer.observe(nativeEl);
    }

    ngOnDestroy(): void {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.observer?.disconnect();
    }

    private reveal(el: HTMLElement) {
        // Remove initial transforms
        this.removeClass(el, '-translate-x-10');
        this.removeClass(el, 'translate-x-10');
        this.removeClass(el, '-translate-y-10');
        this.removeClass(el, 'translate-y-10');
        this.removeClass(el, 'scale-90');
        this.removeClass(el, 'opacity-0');

        // Final state
        this.addClass(el, 'opacity-100');
        this.addClass(el, 'translate-x-0');
        this.addClass(el, 'translate-y-0');
        this.addClass(el, 'scale-100');
    }

    private addClass(el: HTMLElement, className: string) {
        this.renderer.addClass(el, className);
    }

    private removeClass(el: HTMLElement, className: string) {
        this.renderer.removeClass(el, className);
    }
}