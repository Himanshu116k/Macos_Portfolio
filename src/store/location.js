import { create } from "zustand";
import{locations} from "../constants/index.js"
import { immer } from "zustand/middleware/immer";


const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        // Correctly named action to set the active location
        setActiveLocation: (location = null) =>
            set((state) => {
                state.activeLocation = location;
            }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    }))
);
export default useLocationStore;