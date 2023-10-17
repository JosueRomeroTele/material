import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog'; 

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 


import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 


import {MatCardModule} from '@angular/material/card'; 



import {MatGridListModule} from '@angular/material/grid-list'; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }
