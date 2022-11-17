import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema() // Estamos definiendom que es un schema
export class Pokemon extends Document {
  // extendemos la clase Documets para que aplique las propiedades de mongo
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
//exportamos un schema para que la base de datos use las definiciones que declaramos
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
