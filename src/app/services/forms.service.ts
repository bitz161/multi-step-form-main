import { Injectable } from '@angular/core';

interface ITabs {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public tabs: ITabs[] = [];
  constructor() {}

  register(id: string, visible: boolean) {
    this.tabs.push({ id, visible });
  }

  isTabsOpen(id: string): boolean {
    return !!this.tabs.find((element) => element.id === id)?.visible;
  }
}
