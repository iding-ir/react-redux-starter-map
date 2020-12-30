import { IAction } from "../actions/sidebar";
export interface IStateSidebar {
    open: boolean;
}
declare const reducer: (state: {
    open: boolean;
} | undefined, action: IAction) => {
    open: boolean;
};
export default reducer;
//# sourceMappingURL=sidebar.d.ts.map