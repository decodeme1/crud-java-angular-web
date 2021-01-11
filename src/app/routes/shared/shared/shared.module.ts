import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AvatarModule } from 'ngx-avatar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
  max: 99999999999.99
};

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  FlexLayoutModule,
  AvatarModule,
  FormsModule,
  MatInputModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSlideToggleModule
];


@NgModule({
  declarations: [],
  imports: [
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    ...MODULES
  ],
  exports: [
    NgxCurrencyModule,
    ...MODULES
  ],
})
export class SharedModule {
}
