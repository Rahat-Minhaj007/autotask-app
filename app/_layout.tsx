import React from "react";
import "./global.css";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "@/components/ErrorFallBack";
import AppProvider from "@/components/AppProvider";
import AuthGate from "@/components/AuthGate";
import Toast from "react-native-toast-message";
import {toastConfig} from "@/components/notifyToast";

const RootLayout = () => {
    return (
        <AppProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <AuthGate/>
                <Toast topOffset={60}
                       config={toastConfig}
                       visibilityTime={4000}
                />
            </ErrorBoundary>
        </AppProvider>
    );
}
export default RootLayout;