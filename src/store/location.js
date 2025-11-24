import { create } from "zustand";
import{locations} from "../constants/index.js"
import { immer } from "zustand/middleware/immer";


const DEFAULT_LOCATION =   locations.work;

const useLocationStore = create(immer((set)=>({
    activeLocation:DEFAULT_LOCATION,
    serActiveLoaction:(locations=null)=>set((state)=>{
        state.activeLocation =locations
    }),
    resetActiveLocation:()=> set((state)=>{
        
        state.activeLocation=DEFAULT_LOCATION;
    })
})))
export default useLocationStore;