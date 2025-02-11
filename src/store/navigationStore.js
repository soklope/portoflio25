import { create } from 'zustand';

const useToggleStore = create((set) => ({
  isOn: true,
  toggle: () => set((state) => ({ isOn: !state.isOn })),  
}));

export default useToggleStore;
