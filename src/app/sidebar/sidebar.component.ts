import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  get isSidebarCollapsed() {
    return this.sidebarService.getIsCollapsed();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  menuItems = [
    { label: 'Préparation de l\'édition', icon: 'pi pi-file', expanded: true, items: [
      { label: 'Identification des établissements', route: '/identification' },
      { label: 'Composition des équipes', route: '/composition' },
      { label: 'Recrutement équipe GHM', route: '/recrutement' }
    ]},
    { label: 'Tableaux de bord', icon: 'pi pi-chart-bar', route: '/dashboard' },
    { label: 'Gestion de projet', icon: 'pi pi-briefcase', route: '/gestion' },
    { label: 'Suivi-évaluation', icon: 'pi pi-chart-line', route: '/suivi' },
    { label: 'Gestion des ressources', icon: 'pi pi-users', route: '/ressources' },
    { label: 'Bibliothèque', icon: 'pi pi-book', route: '/bibliotheque' },
    { label: 'Paramètrages', icon: 'pi pi-cog', route: '/parametres' }
  ];

  isPreparationCollapsed = false;

  togglePreparation() {
    this.isPreparationCollapsed = !this.isPreparationCollapsed;
  }
}
