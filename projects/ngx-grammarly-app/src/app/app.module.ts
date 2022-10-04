import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxGrammarlyModule } from '../../../ngx-grammarly/src/lib/ngx-grammarly.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxGrammarlyModule.forRoot({ clientId: 'client_Twaj45jZLQyZCTvCSLVHE4' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
