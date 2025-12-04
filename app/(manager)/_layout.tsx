import React from "react";
import {Tabs} from "expo-router";


const ManagerLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{headerShown: false, title: "Dashboard"}} />
            <Tabs.Screen name="tasks" options={{headerShown: false, title: "Tasks"}} />
        </Tabs>
    );
};

export default ManagerLayout;