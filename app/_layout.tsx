import {Stack} from "expo-router";
import "./global.css";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "@/components/ErrorFallBack";

const RootLayout = () => {
    return (
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
    );
}
export default RootLayout;