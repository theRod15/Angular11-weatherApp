import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [
  FlexLayoutModule,

  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  exports: modules,
})
export class MaterialModule {}
