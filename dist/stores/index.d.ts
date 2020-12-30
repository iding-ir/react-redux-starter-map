import { compose } from "redux";
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
declare const store: import("redux").Store<import("redux").CombinedState<{
    auth: never;
    sidebar: {
        open: boolean;
    };
}>, import("../actions/auth").IAction | import("../actions/sidebar").IAction> & {
    dispatch: unknown;
};
export default store;
//# sourceMappingURL=index.d.ts.map