import { type DependencyList, useCallback, useEffect, useRef } from 'react'

/**
 * @internal
 * @link https://github.com/toss/react-simplikit/blob/94bbc0896f5e0bf47f6f8f5f9d0abf1d73b0dc9a/src/hooks/usePreservedCallback/usePreservedCallback.ts
 */
export function usePreservedCallback<
  Arguments extends any[] = any[],
  ReturnValue = unknown,
>(
  callback: (...args: Arguments) => ReturnValue,
  deps: DependencyList = [],
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback((...args: Arguments) => {
    return callbackRef.current(...args)
  }, deps)
}
