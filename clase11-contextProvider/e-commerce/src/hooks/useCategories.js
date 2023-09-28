import { getCategories } from 'firebaseConfig/services/categories'
import { useState, useCallback, useMemo } from 'react'

// Custom hook
// memo => componentes
// useCallback => para funciones
// useMemo => memorizar un calculo
export const useCategories = () => {
  const [categories, setCategories] = useState([])

  const handleGetCategories = useCallback(() => {
    getCategories()
      .then(setCategories)
      .catch(console.error)
  }, [])

  return {
    categories,
    getCategories: handleGetCategories
  }
}
