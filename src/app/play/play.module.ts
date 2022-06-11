import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayPage } from './play.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlayPageRoutingModule } from './play-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlayPageRoutingModule
  ],
  declarations: [PlayPage]
})
export class PlayPageModule {}
