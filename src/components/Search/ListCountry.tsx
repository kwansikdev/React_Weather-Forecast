import React from 'react';
import * as S from './Styled';
import { currentWeahterType } from '../../Type/currentWeahterType';
type TProps = {
  city: string;
  weather: currentWeahterType;
};

export default function ListCountry({ city, weather }: TProps) {
  const weatherInfo = {
    name: weather && weather.name,
    min: weather && (weather.main.temp_min - 275.15).toFixed(1),
    max: weather && (weather.main.temp_max - 275.15).toFixed(1),
  };

  return (
    <S.ListLi>
      <S.ListButton>
        <S.ListCountry>{weatherInfo.name}</S.ListCountry>
        <S.ListTem>
          <S.ListTemLow>최저 {weatherInfo.min}</S.ListTemLow>
          <S.ListTemHigh>최고 {weatherInfo.max}</S.ListTemHigh>
        </S.ListTem>
      </S.ListButton>
    </S.ListLi>
  );
}
