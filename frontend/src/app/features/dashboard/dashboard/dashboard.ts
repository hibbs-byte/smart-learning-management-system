import { Component } from '@angular/core';

import { Sidebar } from '../../../components/sidebar/sidebar';
import { Header } from '../../../components/header/header';
import { DashboardStats } from '../../../components/dashboard-stats/dashboard-stats';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Sidebar,
    Header,
    DashboardStats
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}