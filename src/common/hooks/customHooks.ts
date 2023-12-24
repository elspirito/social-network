import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatchType, AppStateType } from '../../app/store'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
// export const useAppDispatch =  useDispatch<AppDispatchType>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
