import { Component, input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit {
  public readonly src = input('');
  public readonly alt = input('');
  public readonly class = input('');
  public readonly width = input(200);
  public readonly height = input(400);

  public imgSrc: string = this.src();

  protected onImgError() {
    this.imgSrc = 'images/image-placeholder.png';
  }

  ngOnInit() {
    this.imgSrc = this.src();
  }
}
