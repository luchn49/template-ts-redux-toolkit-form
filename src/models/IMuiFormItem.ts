/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOptionType } from 'models/IOptionType';

export default interface IMuiFormItem {
  name: string;
  label: string;
  type?: string;
  options?: IOptionType[] | undefined;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  value: any;
  onChange: (data: any) => void;
  onBlur: (date: any) => void;
}
