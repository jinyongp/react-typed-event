import { usePreservedCallback } from '../usePreservedCallback'
import { AnyEventHandler, EventHandler, EventHandlerMap } from '../../types/event'
import { Type } from '../../types/shared'

export function useSVGEventCallback(handler: AnyEventHandler): AnyEventHandler

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(handler: EventHandler<T, N>): EventHandler<T, N>

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(eventName: N, callback: EventHandler<T, N>): EventHandler<T, N>

export function useSVGEventCallback<
  T extends SVGElement,
  N extends keyof EventHandlerMap<T>,
>(element: Type<T>, eventName: N, callback: EventHandler<T, N>): EventHandler<T, N>

export function useSVGEventCallback(...args: any[]): any {
  return usePreservedCallback(args.pop())
}
