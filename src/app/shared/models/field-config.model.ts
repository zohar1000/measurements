import { InputType } from '../enums/input-type.enum';

export interface FieldConfig {
  attributes: {
    name: string;
  };
  inputType?: InputType;
  validations?: any[];
}
