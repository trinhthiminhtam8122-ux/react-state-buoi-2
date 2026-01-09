import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Content from './components/content/content'
import Footer from './components/Footer/footer'
import DataBindingEx1 from './bindingData/DataBindingEx1'
import DataBindingEx2 from './bindingData/DataBindingEx2'
import EventHandlingEx1 from './EvenHanding/EvenHandingEx1'
import EventHandlingEx2 from './EvenHanding/EvenHandingEx2'
import EventHandlingExample3 from './EvenHanding/EvenHandingEx3'
import UseStateEx1 from './hook/useState/useStateEx1'
import UseStateEx2 from './hook/useState/useStateEX2'
import CarColor from './hook/useState/carColorEx'
import CarColorEx from './hook/useState/carColorEx'
import Glasses from './baiTapVeNha_25/Classes'


// LƯU Ý: sau này thêm component vào đây
const App = () => {
    return (
        <div>
            {/* cơ bản về component */}
            {/* <Header />
            <div className='h-screen flex'>
                <Navigation />
                <Content />
            </div>
            <Footer /> */}

            {/* binding data */}
            {/* ví dụ 1: input binding */}
            {/* <DataBindingEx1 /> */}

            {/* ví dụ 2: hiển thị danh sách sinh viên */}
            {/* <DataBindingEx2 /> */}

            {/* Event handling */}
            {/* ví dụ 1: thay đổi số đếm */}
            {/* <EventHandlingEx1 /> */}

            {/* ví dụ 2: form submit */}
            {/* <EventHandlingEx2 /> */}

            {/* ví dụ 2: form submit */}
            {/* <EventHandlingExample3 /> */}

            {/* hook: useState */}
            {/* <UseStateEx1 />
            <UseStateEx2 /> */}

            {/* <CarColorEx /> */}

            {/* <Classes /> */}
            <Glasses />

        </div>
    )
}

export default App