import { CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe, I18nSelectPipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  name = 'Charles Antonio';

  price = 20000;

  Fruits = ["Apple", "Orange", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  a: number = 0.259;
  b: number = 1.3495;

  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
  gender: string = 'male';

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, arr: [1, 2, 3, 4, 5]}};
}
