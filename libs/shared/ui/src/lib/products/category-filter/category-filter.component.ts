import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type CategoryFilterOption = {
  id: string;
  name: string;
};

@Component({
  selector: 'lib-category-filter',
  imports: [FormsModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent {
  readonly categories = input.required<readonly CategoryFilterOption[]>();
  readonly selectedCategoryId = input<string | null>(null);
  readonly selectedCategoryIdChange = output<string | null>();

  onCategoryChange(rawValue: string): void {
    this.selectedCategoryIdChange.emit(rawValue === '' ? null : rawValue);
  }
}
