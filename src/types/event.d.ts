import type * as React from 'react'

export type EventHandlerMap<T extends Element> = {
  [K in keyof Required<React.DOMAttributes<T>> as K extends `on${string}` ? K : never]: Required<React.DOMAttributes<T>>[K]
}

export type Callback<T extends Element, N extends keyof EventHandlerMap<T>> = EventHandlerMap<T>[N]
