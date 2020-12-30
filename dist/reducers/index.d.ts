import { IStateAuth } from "./auth";
import { IStateSidebar } from "./sidebar";
export interface IState {
    auth: IStateAuth;
    sidebar: IStateSidebar;
}
declare const combinedReducers: import("redux").Reducer<import("redux").CombinedState<{
    auth: never;
    sidebar: {
        open: boolean;
    };
}>, import("../actions/auth").IAction | import("../actions/sidebar").IAction>;
export default combinedReducers;
//# sourceMappingURL=index.d.ts.map