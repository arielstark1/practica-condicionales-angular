import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { LogadoGuard } from './shared/guard/logado.guard';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/button';
import { TaskArielComponent } from './task-ariel/task-ariel.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmComponent } from './confirm/confirm.component';
import {MessageModule} from 'primeng/message';


@NgModule({
    declarations: [
        AppComponent,
        TaskArielComponent,
        ConfirmComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ToastyModule.forRoot(),
        AppRoutingModule,
        RouterModule,
        DashboardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        InterceptorModule,
        MessageModule,
        JwtModule.forRoot({
            config: {
            }
        }),
        ButtonModule,
        DropdownModule ,
        ConfirmDialogModule
    ],
    providers: [
        ConfirmationService,
        LogadoGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
