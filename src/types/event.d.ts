import type * as React from 'react'
import type { JSX } from 'react'

export type ElementNames = keyof JSX.IntrinsicElements

export type EventNames<ElementName extends ElementNames> = {
  [K in keyof JSX.IntrinsicElements[ElementName]]: K extends `on${string}` ? K : never
}[keyof JSX.IntrinsicElements[ElementName]]

export type AnyEventHandler<T = Element> = React.EventHandler<React.SyntheticEvent<T>>

export type EventHandlers<T = Element> = {
  [K in keyof Required<React.DOMAttributes<T>> as K extends `on${string}` ? K : never]: Required<React.DOMAttributes<T>>[K]
}

export type EventCallback<
  ElementName extends ElementNames,
  EventName extends EventNames<ElementName>,
> = JSX.IntrinsicElements[ElementName][EventName]
