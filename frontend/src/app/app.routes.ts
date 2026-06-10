import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard';
import { EnrollmentComponent } from './pages/student/enrollment/enrollment';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },

  {
    path: 'courses',
    component: DashboardComponent
  },

  {
    path: 'enrollment',
    component: EnrollmentComponent
  },

  {
    path: 'progress',
    component: DashboardComponent
  },

  {
    path: 'certificates',
    component: DashboardComponent
  },

  {
    path: 'reports',
    component: DashboardComponent
  },

  {
    path: 'admin',
    component: AdminDashboardComponent
  }
];