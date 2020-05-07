/**
 * 接口域名的管理
 */
let env = 'test'
const configList = {
	'test': {
		baseAPI: 'http://localhost:3333',
	},
}
const baseConfig = configList[env]
export default baseConfig
