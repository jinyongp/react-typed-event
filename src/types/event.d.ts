import type * as React from 'react'
import type { JSX } from 'react'

export type HtmlTags = keyof JSX.IntrinsicElements

export type EventNames<HtmlTag extends HtmlTags> = {
  [K in HtmlTags[HtmlTag]]: K extends `on${string}` ? K : never
}[HtmlTags[HtmlTag]]

export type AnyEventHandler<T = Element> = React.EventHandler<React.SyntheticEvent<T>>

export type GlobalEventHandlers<T = Element> = {
  [K in keyof Required<React.DOMAttributes<T>> as K extends `on${string}` ? K : never]: Required<React.DOMAttributes<T>>[K]
}

export type ElementEventHandler<
  Tag extends HtmlTags,
  EventName extends EventNames<Tag>,
> = JSX.IntrinsicElements[Tag][EventName]

export type HtmlTags = keyof JSX.IntrinsicElements
