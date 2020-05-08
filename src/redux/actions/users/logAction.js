export const LOGED_IN_OR_OUT = "LOGED_IN";

export const logAction = boolean => {
  return {
    type: LOGED_IN_OR_OUT,
    payload: boolean
  };
};
