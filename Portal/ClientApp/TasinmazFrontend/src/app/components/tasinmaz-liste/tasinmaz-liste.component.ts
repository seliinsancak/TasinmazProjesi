import { Component, OnInit } from '@angular/core';
import { Tasinmaz } from '../../models/tasinmaz.model';
import { TasinmazListeService } from './tasinmaz-liste.service';

@Component({
  selector: 'app-tasinmaz-liste',
  templateUrl: './tasinmaz-liste.component.html',
  styleUrls: ['./tasinmaz-liste.component.scss']
})
export class TasinmazListeComponent implements OnInit {
  tasinmazlar: Tasinmaz[] = [];

  constructor(private tasinmazService: TasinmazListeService) { }

  ngOnInit(): void {
    this.tasinmazService.getTasinmazlar().subscribe({
      next: (data) => this.tasinmazlar = data,
      error: (err) => console.error(err)
    });
  }
}
