import React from 'react'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import FormPage from '../../pages/FormPage/FormPage'

const Booking = () => {
    return (
        <div>
            <HeaderForPages name="Booking"/>
            <div className='my-20'>
                <FormPage/>
            </div>
        </div>
    )
}

export default Booking