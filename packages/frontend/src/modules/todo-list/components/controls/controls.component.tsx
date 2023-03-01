import React from 'react';
import { useHistory } from 'react-router-dom';
import { SwitcherIsValue } from '../../../common/components/switcher';
import { DeleteTodoBtn } from '../delete-todo-btn';
import { Button } from '../../../common/components/button';
import { EditTodo } from '../edit-todo/edit-todo.component';
import { ITodoFormValues } from '../../../common/types/todo.types';
import { PURPOSE } from '../../../common/components/button/types';

import * as Styled from './controls.styled';
import { ValuName } from '../../../common/types/components.types';

interface IControlsProps {
  id: string;
  isCompleted: boolean;
  initialValues: ITodoFormValues;
}

export const Controls = ({ id, isCompleted, initialValues }: IControlsProps) => {
  const history = useHistory();

  return (
    <Styled.CtrlContainer>
      <Styled.CtrlWrapper>
        <Button
          purpose={PURPOSE.REGULAR}
          type="button"
          onClick={() => {
            history.push(`/${id}`);
          }}
        >
          View
        </Button>
        <DeleteTodoBtn id={id} />
      </Styled.CtrlWrapper>
      <Styled.CtrlWrapper>
        <SwitcherIsValue id={id} isValue={isCompleted} valueName={ValuName.COMPLETE} />
        <EditTodo id={id} initialValues={initialValues} />
      </Styled.CtrlWrapper>
    </Styled.CtrlContainer>
  );
};
