import {Text, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {useState} from "react";

const TasksScreen = () => {
    const today = new Date().toISOString().split("T")[0];

    const [selected, setSelected] = useState(today);
    console.log("selected date", selected);
    return (
        <View className="flex-1 p-6">
            <View className="drop-shadow-2xl">
                <Calendar
                    onDayPress={(day) => {
                        setSelected(day.dateString);
                    }}
                    hideExtraDays={true}
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
                        dayTextColor: "#000000",             // normal day text
                        textDisabledColor: "#9e9e9e",        // disabled dates
                        todayTextColor: "#000000",           // today text black

                        // Header (month + arrows)
                        monthTextColor: "#000000",           // month title
                        arrowColor: "#000000",               // left/right icon

                        // Weekday labels Mon Tue Wed
                        textSectionTitleColor: "#000000",    // week names

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