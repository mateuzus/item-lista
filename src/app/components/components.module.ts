import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemListComponent } from './ItemList/ItemList.component';

import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ItemListComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        DialogModule
    ],
    exports: [
        ItemListComponent
    ]
})
export class ComponentsModule { }
