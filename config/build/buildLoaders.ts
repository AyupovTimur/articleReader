import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ mode }: BuildOptions): RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      mode != "development" ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName:
              mode == "development"
                ? "[path][name]__[local]--[hash:base64:5]"
                : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [fileLoader, svgLoader, tsLoader, scssLoader];
}
