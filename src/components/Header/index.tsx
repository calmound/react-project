import { useState } from 'react'
import { Menu, Tabs,Button, Typography } from 'antd'

const { Title } = Typography

const ITEMS = [{
    label: <Title className='leading-11' level={4}>采购</Title>,
    key: 'Buy',

}, {
    label: <Title className='leading-11' level={4}>售卖</Title>,
    key: 'Sell',
},]

function App() {
    const [count, setCount] = useState(0)


    return (
        <div className='bg-cyan-500 h-16 flex'>
            <Title level={3} className='basis-1/4 text-right leading-11'>三木</Title>
            <div className='flex w-3/5'>
                <span className='leading-11 w-12 flex-1 text-base font-bold text-slate-50'>售卖</span>
                <span className='leading-11 w-12 flex-1 text-base font-bold text-slate-50'>采购</span>
                <span className='leading-11 w-12 flex-1 text-base font-bold text-slate-50'>售卖</span>
                <span className='leading-11 w-12 flex-1 text-base font-bold text-slate-50'>售卖</span>
            </div>
        </div>
    )
}

export default App
