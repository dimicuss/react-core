import { createSelector } from 'reselect';


export const selectRouter = ({ enhancedRouter }) => enhancedRouter;
export const selectPathname = createSelector(selectRouter, ({ location }) => location.pathname);
export const selectRouteName = createSelector(selectRouter, ({ routeName }) => routeName);
