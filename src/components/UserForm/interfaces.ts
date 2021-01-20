import { ChangeEvent } from 'react';
import { InputOnChangeData } from 'semantic-ui-react';

export interface UserFormProps {
  onNameChange: (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  onPasswordChange: (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  onClick: () => void;
}
