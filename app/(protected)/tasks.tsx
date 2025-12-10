import {FlatList, ScrollView, Text, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {useEffect, useRef, useState} from "react";
import {useTasksQuery} from "@/services/api/tasksApi";
import {useFocusEffect} from "expo-router";

const TasksScreen = () => {
    const today = new Date().toISOString().split("T")[0];
    const dateFormat = {dateString: today, day: 18, month: 12, timestamp: 1766016000000, year: 2025}

    const [selected, setSelected] = useState(dateFormat);
    const flatRef = useRef<FlatList<any>>(null);

    useFocusEffect(() => {
        flatRef.current?.scrollToOffset({ offset: 0, animated: false });
    });

    const {data, isLoading, error} = useTasksQuery({
        from_date: "",
        to_date: "",
        per_page: 15,
    });

    useEffect(() => {
        console.log("data==>", data?.data?.tasks);
    }, [data]);
    console.log("selected date", selected);
    return (
        <View className="flex-1 ">
            <View className="flex-1 drop-shadow-2xl">   {/* FIX HERE */}
                <Calendar
                    onDayPress={(day) => {
                        setSelected(day);
                    }}
                    hideExtraDays={false}
                    style={{
                        borderRadius: 10,
                        padding: 15,
                        height: 380,
                    }}
                    markedDates={{
                        [selected?.dateString]: {
                            selected: true,
                            selectedColor: "#0f0d23",   // selected date circle background
                            selectedTextColor: "#ffffff" // selected date text color
                        }
                    }}
                    theme={{
                        calendarBackground: "#ffffff",       // whole calendar bg
                        backgroundColor: "#ffffff",

                        // Day text colors
                        dayTextColor: "#4b4a5a",             // normal day text
                        textDisabledColor: "#9e9e9e",        // disabled dates
                        todayTextColor: "#0f0d23",           // today text black

                        // Header (month + arrows)
                        monthTextColor: "#0f0d23",           // month title
                        arrowColor: "#0f0d23",
                        textMonthFontWeight: "500",      // <— make month bold
                        textMonthFontSize: 20,            // optional// left/right icon

                        // Weekday labels Mon Tue Wed
                        textSectionTitleColor: "#0f0d23",    // week names

                        // Selected
                        selectedDayBackgroundColor: "#0f0d23",
                        selectedDayTextColor: "#ffffff"
                    }}
                />

                <FlatList
                    data={data ? data.data.tasks : []}
                    ref={flatRef}
                    renderItem={({item}) => (
                        <View className="flex-row items-start bg-white p-5 mt-5 drop-shadow-2xl rounded mx-6">

                        </View>
                    )}
                    keyExtractor={(item) => item?.id.toString()}
                    className="mt-2"
                    contentContainerStyle={{paddingBottom: 100}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default TasksScreen;