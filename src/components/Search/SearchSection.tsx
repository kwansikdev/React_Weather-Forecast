import React, { createRef } from 'react';
import * as S from './Styled';
interface TProps {
  addCity: () => void;
}

export default function SearchSection({ addCity }: TProps) {
  const searchRef: React.RefObject<HTMLInputElement> = createRef();

  function add(e: React.MouseEvent<HTMLButtonElement>) {
    const cityName = searchRef.current !== null && searchRef.current.value;
    addCity(cityName);
  }

  return (
    <>
      <S.SearchSection>
        <S.SearchTitle>search cites</S.SearchTitle>
        <S.SearchForm>
          <S.SearchBox>
            <S.SearchInput
              ref={searchRef}
              placeholder="SEARCH CITY"
              type="search"
            />
            {/* <S.SearchAutoList>
              <span>자동완성</span>
            </S.SearchAutoList> */}
          </S.SearchBox>
          <S.SearchButton onClick={add}>
            <img src="/images/search_black.svg" alt="검색버튼" />
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchSection>
    </>
  );
}
