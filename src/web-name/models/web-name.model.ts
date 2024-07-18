import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface WebNameAttr {
  full_name: string;
  phone: string;
  agreeToOffer: boolean;
  
}

@Table({ tableName: 'webName' })
export class WebName extends Model<WebName, WebNameAttr> {
  @ApiProperty({ example: '1', description: 'WebName ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John Doe', description: "To'liq ismi-sharifi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 'Check', description: 'Rozilik bildirish' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  agreeToOffer: boolean;
}
