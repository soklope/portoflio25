import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  fadeDuration: 100,

  hasClickedOnGreeting: false,
  clickGreeting: () => set((state) => ({ hasClickedOnGreeting: !state.hasClickedOnGreeting })),  

  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  showProjects: true,
  showAboutMe: false,
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
 