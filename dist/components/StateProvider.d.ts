import { Context } from "react";
import { Map } from "mapbox-gl";
export interface State {
    map?: Map;
}
export declare const StateContext: Context<any>;
interface Props {
    children: JSX.Element[];
}
export declare const StateProvider: (props: Props) => JSX.Element;
export default StateProvider;
//# sourceMappingURL=StateProvider.d.ts.map