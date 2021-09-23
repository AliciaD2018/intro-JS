import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[//se indican los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //las cosas que quiero hacer publicas
        ListadoComponent
    ],
    imports: [ //van solo los modulos
        CommonModule
    ]
    


})
export class HeroesModule{

}