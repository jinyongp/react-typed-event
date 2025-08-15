export function preventDefault(event: Event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault()
  }
}

export function stopPropagation(event: Event) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation()
  }
}

export function stopImmediatePropagation(event: Event) {
  if (event && typeof event.stopImmediatePropagation === 'function') {
    event.stopImmediatePropagation()
  }
}

export function stopEvent(event: Event) {
  preventDefault(event)
  stopPropagation(event)
  stopImmediatePropagation(event)
}
