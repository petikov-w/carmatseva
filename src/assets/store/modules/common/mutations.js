export const switch_mobile = (state) => {
    state.isMobile = true;
    state.isTablet = false;
    state.isDesktop = false;
};
export const switch_tablet = (state) => {
    state.isMobile = false;
    state.isTablet = true;
    state.isDesktop = false;
};
export const switch_desktop = (state) => {
    state.isMobile = false;
    state.isTablet = false;
    state.isDesktop = true;
};
