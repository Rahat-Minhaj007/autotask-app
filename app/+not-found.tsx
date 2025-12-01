import {View, Text, TouchableOpacity} from "react-native";
import {Link} from "expo-router";

const NotFound = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <Text style={{fontSize: 22, fontWeight: "600"}}>
                Page not found
            </Text>

            <Link href="/" asChild>
                <TouchableOpacity style={{marginTop: 20}}>
                    <Text style={{color: "#0f0d23"}}>Go Home</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

export default NotFound;