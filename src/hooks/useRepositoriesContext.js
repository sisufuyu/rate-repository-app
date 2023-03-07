import { createContext, useContext } from 'react'

const RepositoriesContext = createContext()

export const useRepositoriesContext = () => {
  return useContext(RepositoriesContext)
}

export default RepositoriesContext