import {Text, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {useEffect, useState} from "react";
import {useTasksQuery} from "@/services/api/tasksApi";

const TasksScreen = () => {
    const today = new Date().toISOString().split("T")[0];

    const [selected, setSelected] = useState(today);

    const {data, isLoading, error} = useTasksQuery({
        from_date: "",
        to_date: "",
        per_page: 15,
    });

    useEffect(() => {
        console.log("data==>",data);
    }, [data]);
    console.log("selected date", selected);
    return (
        <View className="flex-1 p-6">
            <View className="drop-shadow-2xl">
                <Calendar
                    onDayPress={(day) => {
                        setSelected(day.dateString);
                    }}
                    hideExtraDays={false}
                    style={{
                        borderRadius: 10,
                        padding: 15,
                        height: 380,
                    }}
                    markedDates={{
                        [selected]: {
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
            </View>
        </View>
    )
}

export default TasksScreen;