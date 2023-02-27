import React from 'react';
import Slider from 'react-slick';
import { ITodo } from '../../../common/types/todo.types';
import { TodoCard } from '../todo-card';

import * as Styled from './tablet-slider.styled';

interface ITabletSlider {
  data?: ITodo[];
  isLoading: boolean;
}

export const TabletSlider = ({ data, isLoading }: ITabletSlider) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  };

  return (
    <Styled.SliderContainer>
      {!isLoading ? (
        <Slider {...sliderSettings}>
          {data &&
            data.map(({ _id, title, description, isPrivate, isCompleted }) => (
              <TodoCard
                key={_id}
                id={_id}
                title={title}
                description={description}
                isCompleted={isCompleted}
                isPrivate={isPrivate}
              />
            ))}
        </Slider>
      ) : (
        'Loading...'
      )}
    </Styled.SliderContainer>
  );
};
