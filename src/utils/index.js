export * from './is'
export * from './storage'
import { createStorage } from './storage'

const prefixKey = 'Vue_Mland_Meet_'

export const createLocalStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage
  })
}

export const createSessionStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage
  })
}

export const lStorage = createLocalStorage({ prefixKey })
export const sStorage = createSessionStorage({ prefixKey })
