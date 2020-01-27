import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit{

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  options = ['sun', 'moon', 'earth', 'plane', '123', '234'];
  filteredOptions: Observable<string[]>;

  myControl = new FormControl('');

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
    console.log('new hero', this.diagnostic);
  }

  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option =>
        option.toLowerCase().includes(filterValue));
  }
}
