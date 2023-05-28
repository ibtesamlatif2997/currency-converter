import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


// Http Services
import { CustomInterceptor } from './services/httpInterceptor';
import { FixerService } from './services/fixerService';

// Pipes
import { NumberPipe } from './pipes/number.pipe';

let httpServices = [CustomInterceptor, FixerService]
let pipes = [NumberPipe]

@NgModule({
  declarations: [
    ...pipes
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
    ...httpServices,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ...pipes
  ]
})
export class CoreModule { }
