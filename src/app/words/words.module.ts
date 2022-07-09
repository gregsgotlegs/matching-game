import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordsPage } from './words.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WordsPageRoutingModule } from './words-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WordsPageRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [WordsPage],
})
export class WordsPageModule {}
