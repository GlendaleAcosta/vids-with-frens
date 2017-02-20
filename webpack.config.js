var path = require('path');

module.exports = {
    entry: "./app/src/app.jsx",
    output: {
        path: path.resolve(__dirname, 'app/public/'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"],
                    plugins: ["transform-class-properties", ["transform-object-rest-spread", { "useBuiltIns": true }]]
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            // Layout Components
            Main: path.resolve(__dirname, "app/src/containers/Main.jsx"),
            Navbar: path.resolve(__dirname, "app/src/components/layout/Navbar.jsx"),
            Footer: path.resolve(__dirname, "app/src/components/layout/Footer.jsx"),
            // Page Components and children
            Home:  path.resolve(__dirname, "app/src/components/pages/home/Home.jsx"),
            Room: path.resolve(__dirname, "app/src/components/pages/room/Room.jsx"),
                ChatContainer: path.resolve(__dirname, "app/src/components/pages/room/ChatContainer.jsx"),
                ChatBox: path.resolve(__dirname, "app/src/components/pages/room/Chatbox.jsx"),
                ChatForm: path.resolve(__dirname, "app/src/components/pages/room/ChatForm.jsx"),
                YouTube: path.resolve(__dirname, "app/src/components/pages/room/YouTube.jsx"),
                QueueContainer: path.resolve(__dirname, "app/src/components/pages/room/QueueContainer.jsx"),
                VideoList: path.resolve(__dirname, "app/src/components/pages/room/VideoList.jsx"),
            Error404: path.resolve(__dirname, "app/src/components/pages/404.jsx"),
            // Modals
            Modal: path.resolve(__dirname, "app/src/components/modals/Modal.jsx"),
            CreateRoomModal: path.resolve(__dirname, "app/src/components/modals/CreateRoomModal.jsx"),

        }
    }
}
