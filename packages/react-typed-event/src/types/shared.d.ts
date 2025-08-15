export type Type<T> = { new (...args: any[]): T }

export type NonNullish<T> = Exclude<T, null | undefined>
