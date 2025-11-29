import { Effect, Context } from "effect";
import type { WindowState } from "./window";

interface WMState {
    windows: WindowState[];
    current: number;
}

const deleteWindow = (wm_state: WMState) => Effect.gen(function* (_) {
    wm_state.windows.splice(wm_state.current, 1);
})

export class WindowManager extends Context.Tag("WindowManager")<
    WindowManager,
    {
        readonly delete: () => void;
        readonly get: () => WMState;
    }
>() { }

export function provideWMState(state: WMState) {
    return Effect.provideService(WindowManager, {
        delete: () => {
            state.windows.splice(state.current, 1)
        },
        get: () => {
            return state
        }
    });
}

