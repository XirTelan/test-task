import { useCallback, useEffect, useState } from "react";
import { useSWRConfig } from "swr";

type State = {
  isEnabled: boolean;
  isUpdate: boolean;
};

export const useCatUpdateControl = (refreshKey: string = "/api/cats") => {
  const [state, setState] = useState<State>({
    isEnabled: false,
    isUpdate: false,
  });
  const { mutate } = useSWRConfig();

  const refresh = useCallback(() => {
    mutate(refreshKey);
  }, [mutate, refreshKey]);

  useEffect(() => {
    if (!state.isUpdate) return;

    const interval = setInterval(() => {
      refresh();
    }, 5000);

    return () => clearInterval(interval);
  }, [state.isUpdate, refresh]);

  const toggle =
    (key: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({
        ...prev,
        [key]: e.target.checked,
      }));
    };

  return {
    isEnabled: state.isEnabled,
    isUpdate: state.isUpdate,
    refresh,
    toggleEnabled: toggle("isEnabled"),
    toggleUpdate: toggle("isUpdate"),
  };
};
