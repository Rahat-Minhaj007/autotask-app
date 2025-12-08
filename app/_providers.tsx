import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {SafeAreaProvider} from "react-native-safe-area-context";

interface Props {
    children: ReactNode;
}

const AppProviders = ({children}: Props) => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </Provider>
    );
}
export default AppProviders;