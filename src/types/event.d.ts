import type * as React from 'react'
import type { JSX } from 'react'

export type Elements = keyof JSX.IntrinsicElements

export type Events<HtmlTag extends Elements> = {
  [K in keyof JSX.IntrinsicElements[HtmlTag]]: K extends `on${string}` ? K : never
}[keyof JSX.IntrinsicElements[HtmlTag]]

export type AnyEventHandler<T = Element> = React.EventHandler<React.SyntheticEvent<T>>

export type EventHandlers<T = Element> = {
  [K in keyof Required<React.DOMAttributes<T>> as K extends `on${string}` ? K : never]: Required<React.DOMAttributes<T>>[K]
}

export type EventCallback<
  Tag extends Elements,
  Event extends Events<Tag>,
> = JSX.IntrinsicElements[Tag][Event]

export type HtmlTags = keyof JSX.IntrinsicElements
