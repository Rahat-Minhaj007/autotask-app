import React from "react";
import {Text, View} from "react-native";
import {useAuthData} from "@/hooks/useAuthData";
import {Redirect, Stack} from "expo-router";

const AuthGate = () => {
    const {isAuthenticated, userRole} = useAuthData();
    console.log("isAuthenticated 1", userRole)
// 1. LOADING CHECK: If NOT ready, return null (wait for initial check to finish)
//     if (!isAppReady) {
//         console.log("isAppReady 1", isAppReady)
//         return null; // Show nothing or a Splash Screen component
//     }

    if (!isAuthenticated) {
        console.log("isAuthenticated 2", isAuthenticated)
        return (
            <Stack>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                {/* Prevent navigation to any protected segment */}
                <Stack.Screen name="+not-found"/>
            </Stack>
        );
    }

    // 3. AUTHENTICATED: Redirect to the correct role dashboard


    if (userRole === 'manager') {
        console.log("isManager 1", userRole)
         return <Redirect href="/(manager)"/>
    }
    // Add other role paths here...

    // Redirect the authenticated user to their correct dashboard
    // return <Redirect href={dashboardPath}/>;
    // return (
    //     <Stack>
    //         {/* The Login/Auth screen is still available, but users will be redirected away */}
    //         {/*<Stack.Screen name="(auth)" options={{headerShown: false}}/>*/}
    //
    //         {/* --- Protected Role Segments --- */}
    //
    //         {/* User segment (accessible to all) */}
    //         {/*{(userRole === 'user' || userRole === 'manager' || userRole === 'admin') && (*/}
    //         {/*    <Stack.Screen name="(user)" options={{ headerShown: false }} />*/}
    //         {/*)}*/}
    //
    //         {/* Manager segment (accessible to managers and admins) */}
    //         {/*{(userRole === 'manager' || userRole === 'admin') && (*/}
    //         {/*    <Stack.Screen name="(manager)" options={{ headerShown: false }} />*/}
    //         {/*)}*/}
    //
    //         {/* Manager segment (accessible to managers and admins) */}
    //         {(userRole === 'manager') && (
    //             <Stack.Screen name="(manager)" options={{headerShown: false}}/>
    //         )}
    //
    //         {/*/!* Admin segment (accessible to admins only) *!/*/}
    //         {/*{userRole === 'admin' && (*/}
    //         {/*    <Stack.Screen name="(admin)" options={{ headerShown: false }} />*/}
    //         {/*)}*/}
    //
    //         {/* 4. Not Found (Catch-all) */}
    //         <Stack.Screen name="+not-found"/>
    //     </Stack>
    // );
};

export default AuthGate;