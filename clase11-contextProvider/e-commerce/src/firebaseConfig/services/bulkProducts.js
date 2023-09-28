import { PRODUCTS } from 'mock'
import { addItem } from './items'

export const uploadProducts = () => {
  PRODUCTS.forEach(({ id, ...restOfProduct }) => {
    addItem(restOfProduct)
  })
}
