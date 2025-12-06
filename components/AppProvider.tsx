import React from "react";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {SafeAreaProvider} from "react-native-safe-area-context";

interface Props {
    children: React.ReactNode;
}

const AppProvider = ({children}: Props) => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </Provider>
    )
}

export default AppProvider;