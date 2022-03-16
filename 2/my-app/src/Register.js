
import React, { useState, useEffect } from 'react'

export default function Register() {
    const [valueInput, setValue] = useState("")
    let [dataApi, setDataApi] = useState("")
    let [city, setCity] = useState("")

    const getvalue = (e) => {
        setValue(e.target.value)

    }
    const handelstate = (e) => {
        setCity(e.target.value)
    }
    const fetchData = () => {
        fetch('./iranstates.json')
            .then(res => res.json())
            .then(response => setDataApi(response))
    }
    useEffect(() => { fetchData() }, [])

    return (
        <>
            <h3 className='text-center text-white py-3'>رایگان ثبت نام کنید</h3>
            <form>
                <div className="d-md-flex">
                    <input type="text" className='w-100  w-md-50 p-1 ' placeholder='نام' required="required" />
                    <div class="p-2"></div>
                    <input type="text" className='w-100 w-md-50 p-1 ' placeholder='نام خانوادگی' required="required" />
                </div>
                <input type="text" className='w-100 p-1 my-3 ' placeholder="پست الکترونیک" required="required" />
                <input type="text" className='w-100 p-1 ' placeholder="کلمه عبور" required="required" />
                <select onChange={getvalue} className="my-3 p1 w-100" required="required">
                    <option value="" disabled selected> تحصیلات </option>
                    <option value="1">دیپلم </option>
                    <option value="2">لیسانس</option>
                    <option value="3">فوق لیسانس </option>
                    <option value="4">دکتری  </option>
                </select>
                {valueInput === "1" || valueInput === "" ? "" :
                    <input type="text" className='w-100 p-1' placeholder='شهر محل تحصیل'></input>
                }
                <label>شهر محل سکونت</label>
                <select className='w-100 my-3' onChange={handelstate} required="required">
                    <option >استان</option>
                    {Object.keys(dataApi).map((item, i) => (
                        <option key={i} >
                            {item}
                        </option>
                    ))
                    }
                </select>
                <select className='w-100'>
                    {dataApi[city]?.map((item, i) => (
                        <option key={i}>{item}</option>
                    ))}
                </select>
                <button className='w-100 log text-white border-0 py-1 mt-3'>ثبت نام</button>
            </form>
        </>
    )
}
