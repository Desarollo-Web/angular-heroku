import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatGridListModule} from '@angular/material/grid-list'

const modulos: any = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    modulos,

  ], exports: [
    modulos
  ]
})
export class MaterialModule { }
