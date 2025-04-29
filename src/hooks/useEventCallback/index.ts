import { usePreservedCallback } from '../usePreservedCallback'
import { AnyEventHandler, ElementEventHandler, EventNames, HtmlTags, GlobalEventHandlers } from '../../types/event'

export function useEventCallback(handler: AnyEventHandler<HTMLElement>): AnyEventHandler<HTMLElement>

export function useEventCallback<
  HtmlTag extends HtmlTags,
  EventName extends EventNames<HtmlTag>,
>(handler: ElementEventHandler<HtmlTag, EventName>): ElementEventHandler<HtmlTag, EventName>

export function useEventCallback<
  EventName extends keyof GlobalEventHandlers<HTMLElement>,
>(event: EventName, handler: GlobalEventHandlers[EventName]): GlobalEventHandlers[EventName]

export function useEventCallback<
  HtmlTag extends HtmlTags,
  EventName extends EventNames<HtmlTag>,
>(tag: HtmlTag, event: EventName, handler: ElementEventHandler<HtmlTag, EventName>): ElementEventHandler<HtmlTag, EventName>

export function useEventCallback(...args: any[]): any {
  return usePreservedCallback(args.pop())
}
