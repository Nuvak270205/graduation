module.exports = {
    content: ["./index.html", "./*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    olive: "#4a5d31",
                    olivelight: "#6c824c",
                    cream: "#fcfbf7",
                    creambg: "#f7f5ee",
                    pink: "#d96b86",
                    pinksoft: "#f8e6eb",
                    pinkaccent: "#e89bb0"
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', "serif"],
                script: ['"Great Vibes"', '"Alex Brush"', "cursive"],
                sans: ["Montserrat", "sans-serif"]
            }
        }
    },
    plugins: []
};
