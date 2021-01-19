import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  
  items = ITEMS;
  selectedItem: Item;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
