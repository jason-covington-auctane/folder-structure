import React from "react";

export const useMyState = (defaultState) => {
  const state = React.useState(defaultState);
  return state;
};
