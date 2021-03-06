import { combineReducers } from 'redux';
import weathers from './weathers';
import common from './common';

const reducer = combineReducers({
  common,
  weathers,
});

export default reducer;

// 리듀서의 반환값을 유추해준다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내준다.
export type RootState = ReturnType<typeof reducer>;
