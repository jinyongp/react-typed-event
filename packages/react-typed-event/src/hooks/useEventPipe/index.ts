export function useEventPipe(...fns: CallableFunction[]) {
  return (event: Event) => {
    fns.reduce((acc, fn) => {
      if (typeof fn === 'function') {
        return fn(event, acc)
      }
      return acc
    }, null)
  }
}
