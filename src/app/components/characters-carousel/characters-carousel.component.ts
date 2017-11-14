import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-characters-carousel',
  templateUrl: './characters-carousel.component.html',
  styleUrls: ['./characters-carousel.component.css']
})
export class CharactersCarouselComponent implements OnInit {
  
  characters: Array<Character> = [];
  i: number = 0;
  next: string;
  previous: string;

  constructor(private characterService: CharacterService) { }
  
    ngOnInit() {
      this.characterService.getFirstPage().subscribe(
        res => {
          this.characters = res['results'];
          this.next = res['next'];
          this.previous = res['previous'];
          console.log ('oninit', this.characters)
        }
      ); 
    }
  
  
    checkNextPage(next) { 
      if (next) {
        this.characterService.getNextPage(next).subscribe(
          res => {
            this.characters = this.characters.concat(res['results']);
            this.next = res['next'];
            this.previous = res['previous'];
            console.log ('checkNextPage', this.characters)
          })
      }  else {return}
    } 

    previousCharacter() {
      if (this.i === 0) {
        return
      } else {
        this.i = this.i - 1;
      }
      
    }

    nextCharacter() {
      if (this.i === (this.characters.length - 1) && this.next ) {
        this.checkNextPage(this.next);
        this.i = this.i + 1;
      } else if (this.i === (this.characters.length - 1) && this.next === null ) {
        return
      } else {
        this.i = this.i + 1;
      }
    }
  
}

