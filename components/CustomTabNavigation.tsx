import {View, TouchableOpacity, StyleSheet} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
} from "react-native-reanimated";

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

const PRIMARY_COLOR = "#0f0d23";
const SECONDARY_COLOR = "#fff";

const CustomTabNavigation: React.FC<BottomTabBarProps> = ({
                                                              state,
                                                              descriptors,
                                                              navigation,
                                                          }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                if (["_sitemap", "+not-found"].includes(route.name)) return null;

                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <AnimatedTouchableOpacity
                        layout={LinearTransition.springify()
                            .mass(1.2)
                            .damping(18)
                            .stiffness(60)
                            .duration(350)
                        }
                        key={route.key}
                        onPress={onPress}
                        style={[
                            styles.tabItem,
                            {backgroundColor: isFocused ? SECONDARY_COLOR : "transparent"},
                        ]}
                    >
                        {getIconByRouteName(
                            route.name,
                            isFocused ? PRIMARY_COLOR : SECONDARY_COLOR
                        )}
                        {isFocused && (
                            <Animated.Text
                                entering={FadeIn.duration(350)}
                                exiting={FadeOut.duration(350)}
                                style={styles.text}
                            >
                                {label as string}
                            </Animated.Text>
                        )}
                    </AnimatedTouchableOpacity>
                );
            })}
        </View>
    );

    function getIconByRouteName(routeName: string, color: string) {
        switch (routeName) {
            case "index":
                return <Feather name="home" size={18} color={color}/>;

            case "tasks":
                return <EvilIcons name="calendar" size={26} color={color}/>;
                ;

            case "profile":
                return <FontAwesome6 name="circle-user" size={18} color={color}/>;
            default:
                return <Feather name="home" size={18} color={color}/>;
        }
    }
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: PRIMARY_COLOR,
        width: "80%",
        alignSelf: "center",
        bottom: 40,
        borderRadius: 40,
        paddingHorizontal: 12,
        paddingVertical: 15,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    tabItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        paddingHorizontal: 13,
        borderRadius: 30,
    },
    text: {
        color: PRIMARY_COLOR,
        marginLeft: 8,
        fontWeight: "500",
    },
});

export default CustomTabNavigation;