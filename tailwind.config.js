/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                secondary: "#000000",
                light: {
                    100: "#D6C6FF",
                    200: "#A8B5DB",
                    300: "#9CA4AB",
                },
                dark: {
                    100: "#000000",
                    200: "#000000",
                },
                accent: "#AB8BFF",
            },
        },
    },
    plugins: [],
};
