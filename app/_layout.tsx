import {Stack} from "expo-router";
import "./global.css";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "@/components/ErrorFallBack";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

const RootLayout = () => {
    return (
        <Provider store={store}>

            <SafeAreaProvider>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Stack>
                        <Stack.Screen
                            name="(auth)"
                            options={{
                                headerShown: false,
                            }}/>

                        {/* 404 */}
                        <Stack.Screen name="+not-found"/>
                    </Stack>
                </ErrorBoundary>
            </SafeAreaProvider>
        </Provider>
    );
}
export default RootLayout;