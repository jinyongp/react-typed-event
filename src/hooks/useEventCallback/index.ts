import { usePreservedCallback } from '../usePreservedCallback'
import { AnyEventHandler, EventCallback, Events, Elements, EventHandlers } from '../../types/event'
import { type DependencyList } from 'react'

export function useEventCallback(handler: AnyEventHandler<HTMLElement>): AnyEventHandler<HTMLElement>

export function useEventCallback<
  Element extends Elements,
  Event extends Events<Element>,
>(callback: EventCallback<Element, Event>, deps?: DependencyList): EventCallback<Element, Event>

export function useEventCallback<
  Event extends keyof EventHandlers<HTMLElement>,
>(event: Event, callback: EventHandlers[Event], deps?: DependencyList): EventHandlers[Event]

export function useEventCallback<
  Element extends Elements,
  Event extends Events<Element>,
>(
  element: Element,
  event: Event,
  callback: EventCallback<Element, Event>,
  deps?: DependencyList
): EventCallback<Element, Event>

export function useEventCallback(...args: any[]): any {
  const last = args.pop()
  if (Array.isArray(last)) return usePreservedCallback(args.pop(), last)
  if (typeof last === 'function') return usePreservedCallback(last)
  throw new Error('invalid arguments')
}
