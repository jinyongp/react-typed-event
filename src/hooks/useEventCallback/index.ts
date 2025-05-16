import { useLatestCallback } from '../useLatestCallback'
import { AnyEventHandler, EventCallback, EventNames, ElementNames, EventHandlers } from '../../types/event'
import { type DependencyList } from 'react'

export function useEventCallback(handler: AnyEventHandler<HTMLElement>): AnyEventHandler<HTMLElement>

export function useEventCallback<
  ElementName extends ElementNames,
  EventName extends EventNames<ElementName>,
>(callback: EventCallback<ElementName, EventName>, deps?: DependencyList): EventCallback<ElementName, EventName>

export function useEventCallback<
  EventName extends keyof EventHandlers<HTMLElement>,
>(event: EventName, callback: EventHandlers[EventName], deps?: DependencyList): EventHandlers[EventName]

export function useEventCallback<
  ElementName extends ElementNames,
  EventName extends EventNames<ElementName>,
>(
  element: ElementName,
  event: EventName,
  callback: EventCallback<ElementName, EventName>,
  deps?: DependencyList
): EventCallback<ElementName, EventName>

export function useEventCallback(...args: any[]): any {
  const last = args.pop()
  if (Array.isArray(last)) return useLatestCallback(args.pop(), last)
  if (typeof last === 'function') return useLatestCallback(last)
  throw new Error('invalid arguments')
}
