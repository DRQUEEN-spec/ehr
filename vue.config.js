/*
 * @Author: your name
 * @Date: 2020-12-29 00:38:46
 * @LastEditTime: 2020-12-29 00:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ehr\vue.config.js
 */
module.exports = {
    pluginOptions: {
        route: {
            TemplateFolderName: 'page',
            RootFolderName: './src/application',
            SaveConfigPath: './src/core/config/route.config.ts'
        }
    },
}