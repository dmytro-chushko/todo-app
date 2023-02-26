import React from 'react';
import { SwitcherIsCompleted } from '../switcher-is-completed';
import { DeleteTodoBtn } from '../delete-todo-btn';
import { Button } from '../../../common/components/button';
import { EditTodo } from '../edit-todo/edit-todo.component';

import * as Styled from './controls.styled';
import { ITodoFormValues } from '../../types/todo.types';

interface IControlsProps {
  id: string;
  isCompleted: boolean;
  initialValues: ITodoFormValues;
}

export const Controls = ({ id, isCompleted, initialValues }: IControlsProps) => (
  <Styled.CtrlContainer>
    <Styled.CtrlWrapper>
      <Button purpose="regular" type="button">
        View
      </Button>
      <DeleteTodoBtn id={id} />
    </Styled.CtrlWrapper>
    <Styled.CtrlWrapper>
      <SwitcherIsCompleted id={id} isCompleted={isCompleted} />
      <EditTodo id={id} initialValues={initialValues} />
    </Styled.CtrlWrapper>
  </Styled.CtrlContainer>
);
