import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex min-h-screen bg-gray-50">
      <app-sidebar></app-sidebar>
      
      <div class="flex-1" [ngClass]="{'ml-64': !isSidebarCollapsed, 'ml-16': isSidebarCollapsed}">
        <header class="bg-white border-b border-opacity-10">
          <div class="px-4 py-3">
            <div class="header-content">
              <!-- Logo (visible seulement quand la sidebar est réduite) -->
              <div class="logo-container" [class.visible]="isSidebarCollapsed">
                <img src="assets/images/logos.png" 
                     alt="Happy Meet Logo" 
                     class="h-8 w-auto">
              </div>

              <!-- Zone droite -->
              <div class="right-section">
                <!-- Notification -->
                <div class="notification-wrapper">
                  <i class="pi pi-bell text-sm text-primary"></i>
                  <span class="notification-dot"></span>
                </div>

                <!-- Profile -->
                <p-menu #profileMenu [model]="profileItems" [popup]="true"></p-menu>
                <div class="profile-section" (click)="profileMenu.toggle($event)">
                  <div class="avatar-wrapper">
                    <i class="pi pi-user text-primary"></i>
                  </div>
                  <div class="profile-info">
                    <span class="name">Sara AMAGEDJI</span>
                    <span class="role">Administrateur</span>
                  </div>
                  <i class="pi pi-chevron-down text-[0.7rem] text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main class="p-6">
          <app-dashboard></app-dashboard>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .text-primary {
      color: #4070B8;
    }

    header {
      border-color: rgba(0, 0, 0, 0.1);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      position: relative;
    }

    .logo-container {
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      position: absolute;
      left: 0;

      &.visible {
        opacity: 1;
        visibility: visible;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-left: auto;
    }

    .notification-wrapper {
      position: relative;
      background: rgba(64, 112, 184, 0.04);
      padding: 0.35rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      
      i {
        font-size: 0.9rem;
      }
    }

    .notification-dot {
      position: absolute;
      top: -1px;
      right: -1px;
      width: 4px;
      height: 4px;
      background: #ef4444;
      border-radius: 50%;
    }

    .profile-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.35rem 0.75rem;
      background: rgba(64, 112, 184, 0.04);
      border-radius: 20px;
      cursor: pointer;

      .avatar-wrapper {
        width: 24px;
        height: 24px;
        background: rgba(64, 112, 184, 0.15);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        i {
          font-size: 0.8rem;
        }
      }

      .profile-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        .name {
          font-size: 0.8rem;
          font-weight: 500;
          color: #4070B8;
          line-height: 1.2;
        }
        
        .role {
          font-size: 0.7rem;
          color: #6B7280;
          line-height: 1.2;
        }
      }
    }
  `]
})
export class AppComponent {
  constructor(private sidebarService: SidebarService) {}

  get isSidebarCollapsed() {
    return this.sidebarService.getIsCollapsed();
  }

  profileItems: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-user'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    },
    {
      separator: true
    },
    {
      label: 'Sign out',
      icon: 'pi pi-sign-out'
    }
  ];
}
