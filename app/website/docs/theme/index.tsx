import '../styles/index.css'

import Theme from 'rspress/theme'

// @ts-expect-error 忽略 Layout 类型错误
const Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />

export default {
    ...Theme,
    Layout
}

export * from 'rspress/theme'
