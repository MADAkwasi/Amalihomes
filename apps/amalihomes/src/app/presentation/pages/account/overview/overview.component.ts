import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatus } from 'apps/amalihomes/src/app/types/account';
import { recentOrders, orderSummaries } from 'apps/amalihomes/src/app/logic/data/account';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  protected orderSummaries = orderSummaries;
  protected recentOrders = recentOrders;

  getBadgeStyles(status: OrderStatus) {
    switch (status) {
      case 'Delivered':
        return { bg: 'bg-[#F3FAF3]', text: 'text-[#348537]' };
      case 'Shipping':
        return { bg: 'bg-[#F6F6F6]', text: 'text-[#262626]' };
      case 'Processing':
        return { bg: 'bg-[#FFF8ED]', text: 'text-[#EA690C]' };
      default:
        return { bg: 'bg-gray-200', text: 'text-black' };
    }
  }
}
