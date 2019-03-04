import React from 'react'
import { Iterable } from 'immutable'

/**
 * Pass an object of props to a component and have any Immutable
 * ones transformed back to POJOs
 */
export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE]
      return newProps
    },
    {}
  )

  return <WrappedComponent {...propsJS} />
}
