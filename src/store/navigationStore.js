import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  hasClickedOnGreeting: false,
  clickGreeting: () => set((state) => ({ hasClickedOnGreeting: !state.hasClickedOnGreeting })),  

  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  showAboutMe: true,
  showProjects: false,
  showContact: false,

  setActiveSection: (section) =>
    set({
      showAboutMe: section === 'about',
      showProjects: section === 'projects',
      showContact: section === 'contact',
      isMenuOpen: false,
    }),
}));

export default useNavigationStore;
 