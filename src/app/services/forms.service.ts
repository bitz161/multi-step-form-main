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

  toggleTabs(id: String) {
    //find object which has visible:true and change it to false
    const changeVisible = this.tabs.find((element) => element.visible === true);
    if (changeVisible) {
      changeVisible.visible = false;
    }
    //find the id and change the visible to true
    const tab = this.tabs.find((element) => element.id === id);
    if (tab) {
      tab.visible = true;
    }
  }
}
