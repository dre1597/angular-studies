import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { THero } from '../../types/hero.type';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  protected hero: THero | undefined;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly heroService: HeroService = inject(HeroService);
  private readonly location: Location = inject(Location);

  public ngOnInit(): void {
    this.getHero();
  }

  protected save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  protected goBack(): void {
    this.location.back();
  }

  private getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
}
