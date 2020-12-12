// @flow

import { defaultReducerState } from '../../Constants/DefaultObject';
import type { ActionDefaultProp } from '../../Types/DefaultTypes';

const initialState = {
  exampleState: defaultReducerState
};

export const example_store = (state = initialState, action: ActionDefaultProp) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
