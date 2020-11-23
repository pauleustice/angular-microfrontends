import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-federation',
  templateUrl: './module-federation.component.html',
  styleUrls: [ './module-federation.component.scss', '../../../../diagrams.scss' ],
})
export class ModuleFederationComponent implements OnInit {
  openRemotes: Set<number> = new Set();
  accessingDeps: Set<string> = new Set();

  constructor() { }

  ngOnInit(): void {
  }

  openRemote(id: number): void {
    this.openRemotes.add(id);
  }

  accessDeps(ids: Array<string>): void {
    ids.forEach((id) => {
      this.accessingDeps.add(id);
      setTimeout(() => this.accessingDeps.delete(id), 5000);
    });
  }
}
