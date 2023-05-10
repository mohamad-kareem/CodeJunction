import {useState,createContext} from 'react'

export const UserContext = createContext()

const Context = ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  return (
    <UserContext.Provider value={{language,setLanguage}}>
        {children}
    </UserContext.Provider>
  )
}

export default Context
