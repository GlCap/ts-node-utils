/**  Create a promise that rejects in <ms> milliseconds */
export const promiseTimeout = async <T>(
  timeoutMs: number,
  promise: Promise<T>,
  failureMessage?: string,
): Promise<T> => {
  let timeoutHandle: NodeJS.Timeout;

  // eslint-disable-next-line promise/param-names
  const timeoutPromise = new Promise<never>((_resolve, reject) => {
    timeoutHandle = setTimeout(
      () => reject(new Error(failureMessage)),
      timeoutMs,
    );
  });

  return Promise.race([promise, timeoutPromise]).then((result) => {
    clearTimeout(timeoutHandle);
    return result;
  });
};
