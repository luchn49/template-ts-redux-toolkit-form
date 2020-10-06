interface ISelectItem {
  id: string;
  value: string;
}

export default interface IMuiFormItem {
  name: string;
  label: string;
  type?: string;
  options?: ISelectItem[] | undefined;
  required?: boolean;
  errorobj?: {
    message: string;
    type: string;
  };
  value?: string | number | null;
  onChange?: (data: any) => void;
}
