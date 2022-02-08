import { useEffect, useRef, useCallback } from "react";

export default function useDebounce(callback, delay, dependencies) {
  // SetTimeout
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);
  // SetTimeout

  // Debounce
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
  // Debounce
}
