export const LOGED_IN = "LOGED_IN";

export const logInAction = boolean => {
  return {
    type: LOGED_IN,
    payload: boolean
  };
};
