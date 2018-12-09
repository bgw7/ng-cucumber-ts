import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateModuleConfig, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CatComponent } from './cat/cat.component';

export function translateFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/il8n', '.json');
}

const IL8N_CONFIG = <TranslateModuleConfig> {
  loader: {
    provide: TranslateLoader,
    useFactory: translateFactory,
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(IL8N_CONFIG),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
