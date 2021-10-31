import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { ListaPlataformaComponent } from './lista-plataforma/lista-plataforma.component';
import { ImpotaArquivoComponent } from './impota-arquivo/impota-arquivo.component';
import { ListaGameComponent } from './lista-game/lista-game.component';
import { ArquivoXmlService } from './services/arquivo-xml.service';
import { PlataformaService } from './services/plataforma.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { AddPlataformaComponent } from './add-plataforma/add-plataforma.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadArquivoComponent } from './upload-arquivo/upload-arquivo.component';
import { TorneioComponent } from './torneio/torneio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlataformaComponent,
    ImpotaArquivoComponent,
    ListaGameComponent,
    AddPlataformaComponent,
    UploadArquivoComponent,
    TorneioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [
    ArquivoXmlService,
    PlataformaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
