import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'expansion-overview-example',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule],
  templateUrl: './component.html',   // matches your file name
  styleUrls: ['./component.css'],    // matches your file name
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionOverviewExample {
  readonly panelOpenState = signal(false);
}
