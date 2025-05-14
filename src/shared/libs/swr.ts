export const fetcher = <T = unknown>(
  ...args: Parameters<typeof fetch>
): Promise<T> => fetch(...args).then((res) => res.json());
