import { usePreservedCallback } from '../usePreservedCallback'
import { AnyEventHandler, EventHandler, EventHandlerMap } from '../../types/event'
import { Type } from '../../types/shared'

export function useEventCallback(handler: AnyEventHandler): AnyEventHandler

export function useEventCallback<
  T extends HTMLElement,
  N extends keyof EventHandlerMap<T>,
>(handler: EventHandler<T, N>): EventHandler<T, N>

export function useEventCallback<
  T extends HTMLElement,
  N extends keyof EventHandlerMap<T>,
>(eventName: N, callback: EventHandler<T, N>): EventHandler<T, N>

export function useEventCallback<
  T extends HTMLElement,
  N extends keyof EventHandlerMap<T>,
>(element: Type<T>, eventName: N, callback: EventHandler<T, N>): EventHandler<T, N>

export function useEventCallback(...args: any[]): any {
  return usePreservedCallback(args.pop())
}
