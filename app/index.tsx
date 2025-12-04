import {Redirect} from "expo-router";
import { useAuthData } from "@/hooks/useAuthData";
import SplashScreen from "@/components/SplashScreen";

export default function Index() {
    const { loading, userRole, isAuthenticated } = useAuthData();

    if (loading) {
        return <SplashScreen />; // or splash screen
    }

    return (
        <>
            {isAuthenticated && userRole === "manager" ? (
                <Redirect href="/(manager)" />
            ) : (
                <Redirect href="/(auth)" />
            )}
        </>
    );
}