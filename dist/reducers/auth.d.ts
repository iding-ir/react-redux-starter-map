import { IAction } from "../actions/auth";
import { User } from "../components/Auth";
export interface IStateAuth {
    isSignedIn: boolean;
    user: User;
}
declare const reducer: (state: {
    isSignedIn: null;
    user: null;
} | undefined, action: IAction) => {
    isSignedIn: null;
    user: null;
} | {
    isSignedIn: boolean;
    user: User | null;
};
export default reducer;
//# sourceMappingURL=auth.d.ts.map