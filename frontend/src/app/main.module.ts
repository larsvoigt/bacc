import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FileUploadModule} from 'ng2-file-upload';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
import {TranslateModule, TranslateModuleConfig, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MarkdownModule} from 'angular2-markdown';
import {PopoverModule} from 'ngx-popover';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';

import {AppComponent} from './main';
import {CheckOverComponent} from './check-over/check-over';
import {HeaderComponent} from './header/header';
import {ReportComponent} from './report/report';
import {UploadService} from './check-over/upload.service';
import {CheckOverService} from './check-over/check-over.service';
import {ReportService} from './report/report.service';
import {ShowRulesComponent} from './show-rules/show-rules';
import {InfoComponent} from './info/info';
import {FeedbackComponent} from './feedback/feedback';
import {HintOfficialComponent} from './hintOfficialVersion';
import {LegendComponent} from './legend/legend';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const translateConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};


@NgModule({
  declarations: [
    AppComponent,
    CheckOverComponent,
    HeaderComponent,
    ReportComponent,
    ShowRulesComponent,
    InfoComponent,
    FeedbackComponent,
    HintOfficialComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    FileUploadModule,
    MatProgressBarModule,
    HttpModule,
    JasperoAlertsModule,
    HttpClientModule,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(translateConfig),
    MarkdownModule.forRoot()
  ],
  exports: [],
  providers: [
    UploadService,
    CheckOverService,
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
