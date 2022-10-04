import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { NgxGrammarlyComponent } from './components';
import * as Grammarly from '@grammarly/editor-sdk';
import { NgxGrammarlyConfig } from './interfaces';

@NgModule({
  declarations: [NgxGrammarlyComponent],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NgxGrammarlyComponent],
})
export class NgxGrammarlyModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxGrammarlyModule) {
    if (parentModule) {
      throw new Error(
        'NgxGrammarlyModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: NgxGrammarlyConfig
  ): ModuleWithProviders<NgxGrammarlyModule> {
    const { clientId } = config;

    if (!clientId) {
      throw new Error(
        'clientId is not provided! Please, generate it in the https://developer.grammarly.com'
      );
    }

    Grammarly.init(clientId);

    return {
      ngModule: NgxGrammarlyModule,
      providers: [],
    };
  }
}
