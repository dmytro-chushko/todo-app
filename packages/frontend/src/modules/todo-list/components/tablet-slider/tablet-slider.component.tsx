import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { ITodo } from '../../../common/types/todo.types';
import { SIZES } from '../../../theme';
import { TodoCard } from '../todo-card';

import * as Styled from './tablet-slider.styled';

interface ITabletSlider {
  data?: ITodo[];
  isLoading: boolean;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export const TabletSlider = ({ data, setLimit, isLoading }: ITabletSlider) => {
  const { inView, ref } = useInView();

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: SIZES.SLIDER.SPEED,
    slidesToShow: SIZES.SLIDER.TO_SHOW,
    slidesToScroll: SIZES.SLIDER.TO_SCROLL,
    centerMode: true
  };

  useEffect(() => {
    if (inView) {
      setLimit((prev) => prev + 1);
    }
  }, [inView]);

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
          <div ref={ref} />
        </Slider>
      ) : (
        'Loading...'
      )}
    </Styled.SliderContainer>
  );
};
