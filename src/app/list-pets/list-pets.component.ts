import { Component, OnInit } from '@angular/core';
import {PetService} from "../services/pet.service";
import {forEach} from "@angular-devkit/schematics";
import {of} from "rxjs";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {

  constructor(private pets: PetService) { }

  ngOnInit(): void {
  }

  listPets() {
    return this.pets._pets$.value;
  }
}
