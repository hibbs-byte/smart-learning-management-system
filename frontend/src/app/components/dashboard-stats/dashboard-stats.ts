import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../services/progress';

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-stats.html',
  styleUrl: './dashboard-stats.css'
})
export class DashboardStats implements OnInit {

  progress: any[] = [];

  constructor(
    private progressService: ProgressService,
    private cdr: ChangeDetectorRef   // ✅ add this
  ) {}

  ngOnInit(): void {
    this.progressService.getProgress().subscribe({
      next: (data) => {
        this.progress = [...data];   // ✅ spread forces new reference
        this.cdr.detectChanges();    // ✅ forces Angular to re-render
        console.log('Progress loaded:', this.progress);
      },
      error: (err) => {
        console.error('PROGRESS ERROR:', err);
      }
    });
  }
}