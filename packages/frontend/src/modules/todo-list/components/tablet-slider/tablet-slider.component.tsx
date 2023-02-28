import React from 'react';
import Slider from 'react-slick';
import { ITodo } from '../../../common/types/todo.types';
import { SIZES } from '../../../theme';
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
    speed: SIZES.SLIDER.SPEED,
    slidesToShow: SIZES.SLIDER.TO_SHOW,
    slidesToScroll: SIZES.SLIDER.TO_SCROLL,
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
