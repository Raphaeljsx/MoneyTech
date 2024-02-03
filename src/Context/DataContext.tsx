import { Children, PropsWithChildren, createContext, useContext, useState } from "react"
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null,
  loading: boolean,
  error: string | null,
  inicio: string,
  final: string
  setInicio: React.Dispatch<React.SetStateAction<string>>,
  setFinal: React.Dispatch<React.SetStateAction<string>>,
}

export type IVenda = {
  id: string
  nome: string
  preco: number
  status: "pago" | "processando" | "falha"
  pagamento: "boleto" | "pix" | "cartao"
  data: string
  parcelas: number | null
}

export const useData = () =>{
  const context = useContext(DataContext)
  if(!context) throw new Error('useData precisa estar em DataContextProvider')
  return context
}

const DataContext = createContext<IDataContext | null>(null);

function getAnyDaysAgo(n: number){
  const date = new Date()
  date.setDate(date.getDate() - n)

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear()

  return `${yyyy}-${mm}-${dd}`;
}



export const DataContextProvider = ({children}:PropsWithChildren) =>{
  const[inicio,setInicio] = useState(getAnyDaysAgo(30))
  const[final,setFinal] = useState(getAnyDaysAgo(0))

  const {data, loading, error} = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)

  return(
    <DataContext.Provider value={{data, loading, error, inicio, setInicio,final, setFinal}}>{children}</DataContext.Provider>
  )
  
}



export default DataContext