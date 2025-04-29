import { usePreservedCallback } from '../usePreservedCallback'
import { AnyEventHandler, ElementEventHandler, Events, Elements, GlobalEventHandlers } from '../../types/event'

export function useEventCallback(handler: AnyEventHandler<HTMLElement>): AnyEventHandler<HTMLElement>

export function useEventCallback<
  Element extends Elements,
  Event extends Events<Element>,
>(handler: ElementEventHandler<Element, Event>): ElementEventHandler<Element, Event>

export function useEventCallback<
  Event extends keyof GlobalEventHandlers<HTMLElement>,
>(event: Event, handler: GlobalEventHandlers[Event]): GlobalEventHandlers[Event]

export function useEventCallback<
  Element extends Elements,
  Event extends Events<Element>,
>(element: Element, event: Event, handler: ElementEventHandler<Element, Event>): ElementEventHandler<Element, Event>

export function useEventCallback(...args: any[]): any {
  return usePreservedCallback(args.pop())
}
