import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let fixture: ComponentFixture<CarouselComponent>;
  let component: CarouselComponent;

  const mockImages = [
    { image: '1.jpg', name: 'Image 1', _uid: 0 },
    { image: '2.jpg', name: 'Image 2', _uid: 1 },
    { image: '3.jpg', name: 'Image 3', _uid: 2 },
    { image: '4.jpg', name: 'Image 4', _uid: 3 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('carouselImages', mockImages);
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with correct selectedIndex and imagePositions', () => {
    expect(component['selectedIndex']()).toBe(0);
    expect(component['imagePositions']()).toEqual([1, 2, 3]);
  });

  it('should move carousel to next image', () => {
    component['handleCarouselMovement']('next');
    expect(component['selectedIndex']()).toBe(1);
    expect(component['imagePositions']()).toEqual([0, 2, 3]);
  });

  it('should move carousel to previous image', () => {
    component['handleCarouselMovement']('prev');
    expect(component['selectedIndex']()).toBe(3);
    expect(component['imagePositions']()).toEqual([0, 1, 2]);
  });

  it('should update selectedIndex and imagePositions when thumbnail is clicked', () => {
    component['navigateToImage'](1);
    expect(component['selectedIndex']()).toBe(2);
    expect(component['imagePositions']()).toEqual([0, 1, 3]);
  });

  it('should respond to ArrowRight key press', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    window.dispatchEvent(event);
    expect(component['selectedIndex']()).toBe(1);
  });

  it('should respond to ArrowLeft key press', () => {
    component['selectedIndex'].set(1);
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    window.dispatchEvent(event);
    expect(component['selectedIndex']()).toBe(0);
  });

  it('should remove event listener on destroy', () => {
    const spy = jest.spyOn(window, 'removeEventListener');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});
