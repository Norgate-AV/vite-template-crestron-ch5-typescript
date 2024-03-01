import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";
import { WebXPanelConfigParams } from "@crestron/ch5-webxpanel";
import { Action } from "redux";

declare global {
    interface Window {
        bridgeReceiveIntegerFromNative: typeof bridgeReceiveIntegerFromNative;
        bridgeReceiveBooleanFromNative: typeof bridgeReceiveBooleanFromNative;
        bridgeReceiveStringFromNative: typeof bridgeReceiveStringFromNative;
        bridgeReceiveObjectFromNative: typeof bridgeReceiveObjectFromNative;
    }

    interface IControlSystemOptions {
        actions: {
            setControlSystemOnline: (value: boolean) => Action;
        };
    }

    interface IWebXPanelOptions {
        config: Partial<WebXPanelConfigParams>;
        actions: {
            setWebXPanelOnline: (value: boolean) => Action;
            setWebXPanelConfig: (
                value: Partial<WebXPanelConfigParams>,
            ) => Action;
            setWebXPanelVersion: (value: string) => Action;
            setWebXPanelBuildDate: (value: string) => Action;
            setWebXPanelIsActive: (value: boolean) => Action;
            setWebXPanelWsConnected: (value: boolean) => Action;
        };
    }
}
