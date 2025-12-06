import React from "react";
import "./global.css";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "@/components/ErrorFallBack";
import AppProvider from "@/components/AppProvider";
import AuthGate from "@/components/AuthGate";

const RootLayout = () => {
    return (
        <AppProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <AuthGate/>
            </ErrorBoundary>
        </AppProvider>
    );
}
export default RootLayout;