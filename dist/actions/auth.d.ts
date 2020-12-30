import { User } from "../components/Auth";
export interface IAction {
    type: string;
    payload: {
        user: User | null;
    };
}
export declare const signIn: (user: User) => IAction;
export declare const signOut: () => IAction;
//# sourceMappingURL=auth.d.ts.map