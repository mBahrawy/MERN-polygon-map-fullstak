export const getCurrentState = (state) => {
  try {
    return JSON.parse(JSON.stringify(state));
  } catch (e) {
    return null;
  }
};
