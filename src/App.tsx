import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { sortItems } from './Utils/RenderItems';
import { GoodsType } from './types/GoodsType';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [items, setItems] = useState<Good[]>([]);
  const [type, setType] = useState<GoodsType>('');

  useEffect(() => {
    const promise = sortItems(type);

    if (promise) {
      promise.then(setItems);
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={() => setType('all')} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => setType('firstFive')}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={() => setType('red')}>
        Load red goods
      </button>

      <GoodsList goods={items} />
    </div>
  );
};
