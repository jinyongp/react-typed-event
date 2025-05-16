import { type DependencyList, useCallback, useRef } from 'react'

export function useLatestCallback<Args extends any[] = any[], ReturnType = unknown>(
  callback: (...args: Args) => ReturnType,
  deps: DependencyList = [],
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  return useCallback((...args: Args) => callbackRef.current(...args), deps)
}
