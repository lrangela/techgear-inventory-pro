import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { resolveDisplayImageUrl } from '@techgear/util';

export type ProductCardItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { name: string } | null;
};

@Component({
  selector: 'lib-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly product = input.required<ProductCardItem>();
  readonly view = output<number>();
  readonly imageUrl = computed(() => {
    const item = this.product();
    return resolveDisplayImageUrl(item.images[0], item.title, 600, 400, item.category?.name);
  });

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement | null;
    if (!image) {
      return;
    }
    const item = this.product();
    image.onerror = null;
    image.src = resolveDisplayImageUrl(
      undefined,
      item.title,
      600,
      400,
      item.category?.name
    );
  }

  onView(): void {
    this.view.emit(this.product().id);
  }
}
