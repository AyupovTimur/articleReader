import {type RuleSetRule} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {type BuildOptions} from './types/config'
import {buildCssLoaders} from "./loaders/buildCssLoaders";

export function buildLoaders({mode}: BuildOptions): RuleSetRule[] {
    const babelLoader = {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

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
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const scssLoader = buildCssLoaders(mode)

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        scssLoader
    ]
}
