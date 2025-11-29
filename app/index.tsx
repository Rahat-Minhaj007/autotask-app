import {Redirect} from "expo-router";
import {useEffect, useState} from "react";

const Index = () => {
    const [role, setRole] = useState<string | null>(null);

    // useEffect(() => {
    //     // example: load role from secure storage or API
    //     setTimeout(() => {
    //         setRole("user");
    //     }, 500);
    // }, []);

    // if (!role) return null;

    // if (role === "admin") return <Redirect href="/(admin)" />;
    // if (role === "manager") return <Redirect href="/(manager)" />;
    // if (role === "user") return <Redirect href="/(user)" />;

    return <Redirect href="/(auth)"/>;
}
export default Index;