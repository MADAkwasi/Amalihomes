import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update fileName and previewUrl when an image is selected', async () => {
    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });

    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    const mockReadAsDataURL = jest.fn();
    const mockFileReader = {
      readAsDataURL: mockReadAsDataURL,
      onload: jest.fn(),
      result: 'data:image/png;base64,dummyImageData',
    };
    jest.spyOn(window as any, 'FileReader').mockImplementation(() => mockFileReader);

    component['onFileSelected'](event);

    mockFileReader.onload();

    expect(component['fileName']()).toBe('test.png');
    expect(component['previewUrl']()).toBe('data:image/png;base64,dummyImageData');
  });

  it('should not set previewUrl if selected file is not an image', () => {
    const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });

    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    component['onFileSelected'](event);

    expect(component['fileName']()).toBe('test.txt');
    expect(component['previewUrl']()).toBeNull();
  });
});
