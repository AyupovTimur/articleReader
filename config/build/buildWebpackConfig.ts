import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: mode !== 'production' ? 'inline-source-map' : undefined,
    devServer: buildDevServer(options)
  }
}
