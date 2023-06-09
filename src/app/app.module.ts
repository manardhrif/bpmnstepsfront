import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpmnStePServiceService } from './bpmn-ste-pservice.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,HttpClientModule
  ],
  providers: [BpmnStePServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
