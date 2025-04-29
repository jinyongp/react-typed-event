import { usePreservedCallback } from '../usePreservedCallback'
import { Callback, EventHandlerMap } from '../../types/event'
import { Type } from '../../types/shared'

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(callback: Callback<T, N>): Callback<T, N>

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(eventName: N, callback: Callback<T, N>): Callback<T, N>

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(element: Type<T>, eventName: N, callback: Callback<T, N>): Callback<T, N>

export function useSVGEventCallback(...args: any[]): any {
  return usePreservedCallback(args.pop())
}
