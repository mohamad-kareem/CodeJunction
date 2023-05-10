import {useState,createContext} from 'react'



const Context = ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  return (
    <UserContext.Provider value={{language,setLanguage}}>
        {children}
    </UserContext.Provider>
  )
}
export const UserContext = createContext()

export default Context
