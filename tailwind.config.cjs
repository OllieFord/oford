module.exports = {
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
        theme: {
            extend: {
                fontFamily: {
                    body: ['Junicode'],
                },
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
