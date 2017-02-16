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
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            Main: path.resolve(__dirname, "app/src/components/Main.jsx"),
            Navbar: path.resolve(__dirname, "app/src/components/layout/Navbar.jsx"),
            Footer: path.resolve(__dirname, "app/src/components/layout/Footer.jsx"),
            Home:  path.resolve(__dirname, "app/src/components/pages/home/Home.jsx"),

        }
    }
}
