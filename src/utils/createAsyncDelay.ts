export const createAsyncDelay = async (duration: number): Promise<void> => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, duration),
  );
};
