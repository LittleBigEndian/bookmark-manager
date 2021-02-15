import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '../material-shared.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MaterialSharedModule],
  exports: [ConfirmDialogComponent],
})
export class DialogsModule {}
