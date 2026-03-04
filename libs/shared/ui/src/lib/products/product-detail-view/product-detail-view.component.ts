import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { resolveDisplayImageUrl } from '@techgear/util';

export type ProductDetailItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { name: string } | null;
};

@Component({
  selector: 'lib-product-detail-view',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-view.component.html',
  styleUrl: './product-detail-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailViewComponent {
  readonly product = input.required<ProductDetailItem>();
  private readonly activeImageIndex = signal(0);
  readonly imageUrls = computed(() => {
    const item = this.product();
    if (item.images.length === 0) {
      return [
        resolveDisplayImageUrl(
          undefined,
          item.title,
          900,
          900,
          item.category?.name
        ),
      ];
    }

    return item.images.map((image, index) =>
      resolveDisplayImageUrl(
        image,
        `${item.title} ${index + 1}`,
        900,
        900,
        item.category?.name
      )
    );
  });

  readonly mainImageUrl = computed(() => {
    const images = this.imageUrls();
    const index = this.activeImageIndex();
    return images[Math.min(index, images.length - 1)] ?? images[0];
  });

  readonly galleryImageUrls = computed(() => {
    return this.imageUrls().slice(0, 5);
  });

  selectImage(index: number): void {
    this.activeImageIndex.set(index);
  }
}
