import {ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {useEffect, useRef, useState} from "react";
import {useTasksQuery} from "@/services/api/tasksApi";
import {router, useFocusEffect} from "expo-router";
import {TaskAssignedUser} from "@/interfaces/interfaces";
import {badgeBg, badgeText} from "@/constants/globalConstant";
import moment from "moment";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import NoDataFound from "@/components/NoDataFound";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const TasksScreen = () => {
    const today = new Date().toISOString().split("T")[0];
    const dateFormat = {dateString: today, day: 18, month: 12, timestamp: 1766016000000, year: 2025}
    const [selected, setSelected] = useState(today);
    const flatRef = useRef<FlatList<any>>(null);

    useFocusEffect(() => {
        flatRef.current?.scrollToOffset({offset: 0, animated: false});
    });

    const {data, isLoading, error} = useTasksQuery(
        {
            from_date: selected,
            to_date: selected,
            per_page: 15,
        }
    );

    useEffect(() => {
        console.log("data==>", data);
    }, [data]);
    console.log("selected date", selected);
    if (isLoading) {
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <ActivityIndicator size="large" color="#0f0d23"/>
                <Text className="mt-3 text-sm text-neutral-400">
                    Loading tasks...
                </Text>
            </View>
        );
    }
    return (
        <View className="flex-1">
            <FlatList
                ref={flatRef}
                data={data ? data.data.tasks : []}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 120}}

                ListHeaderComponent={() => (
                    <View>
                        {/* Calendar */}
                        <Calendar
                            onDayPress={(day) => setSelected(day.dateString)}
                            hideExtraDays={false}
                            style={{
                                borderRadius: 0,
                                padding: 15,
                                height: 380,

                            }}
                            markedDates={{
                                [selected]: {
                                    selected: true,
                                    selectedColor: "#0f0d23",
                                    selectedTextColor: "#ffffff",
                                },
                            }}
                            theme={{
                                calendarBackground: "#ffffff",
                                backgroundColor: "#ffffff",

                                // Day text colors
                                dayTextColor: "#4b4a5a",
                                textDisabledColor: "#9e9e9e",
                                todayTextColor: "#0f0d23",


                                monthTextColor: "#0f0d23",
                                arrowColor: "#0f0d23",
                                textMonthFontWeight: "500",
                                textMonthFontSize: 20,


                                textSectionTitleColor: "#0f0d23",


                                selectedDayBackgroundColor: "#0f0d23",
                                selectedDayTextColor: "#ffffff"
                            }}
                        />

                        {/* Selected day name */}
                        <View className="px-4 mt-3">
                            <Text className="text-base font-semibold text-dark-100">
                                {moment(selected).format("dddd, MMMM D, YYYY")}
                            </Text>
                        </View>
                    </View>
                )}

                ListEmptyComponent={<NoDataFound/>}

                renderItem={({item}) => {
                    console.log("item status==>>", item.status);
                    const rawStatus = item.status;
                    const status = rawStatus as keyof typeof badgeBg;
                    return (
                        <Pressable
                            onPress={() => router.push({
                                pathname: "/task/[taskDetailsId]",
                                params: {taskDetailsId: item.id},
                            })}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.85 : 1,
                            })}
                        >
                            <View className="bg-white p-4 mt-5 rounded mx-3 border border-slate-400 drop-shadow-2xl">
                                <View className="border-l-2 pl-4" style={{borderLeftColor: "#E2E8F0"}}>
                                    <View className="flex-row items-center justify-end">
                                        <View style={{backgroundColor: badgeBg[item?.status]}}
                                              className={`px-3 py-1 rounded-full`}>
                                            <Text style={{color: badgeText[item?.status]}}
                                                  className={`text-xs font-semibold`}>
                                                {rawStatus}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text
                                        className="font-semibold text-dark-200 text-sm py-2"
                                        numberOfLines={1}
                                        style={{flexShrink: 1}}
                                    >
                                        {item?.title || "Unknown"}
                                    </Text>
                                    <Text
                                        className="font-semibold text-neutral-400 text-xs"
                                        numberOfLines={1}
                                        style={{flexShrink: 1}}
                                    >
                                        {item?.description || "Unknown"}
                                    </Text>


                                    <View className="flex-row justify-between items-center pt-2">
                                        <View className="flex-row items-center gap-1 mt-2">
                                            <Text className="text-xs text-dark-200">

                                                {
                                                    moment(item.work_time, "HH:mm:ss").format("LT")
                                                }
                                            </Text>
                                            {item?.assigned_users?.map((x: TaskAssignedUser, index: number) => (
                                                <Image
                                                    key={x.id}
                                                    source={{uri: x.avatar_url}}
                                                    style={{
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: 100,
                                                        marginLeft: index === 0 ? 0 : -10, // ~20% overlap
                                                        borderWidth: 2,
                                                        borderColor: "#fff",
                                                    }}
                                                />
                                            ))}
                                        </View>

                                        <View className="flex-row items-center">
                                            <Text className="text-xs text-dark-200">
                                                Created By
                                            </Text>
                                            <Image

                                                source={{uri: item.creator.avatar_url}}
                                                style={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: 100,
                                                    borderWidth: 2,
                                                    borderColor: "#fff",
                                                }}
                                            />
                                            <Text className="text-xs text-dark-200">
                                                {item.creator.name}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    )
                }}
            />
        </View>
    )
}

export default TasksScreen;