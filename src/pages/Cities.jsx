import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../ContextApi'

const Cities = () => {

    const navigate = useNavigate()
    const {city, setCity} = useContext(MyContext)

    function handleNavigate(cityy) {
        setCity(cityy)
        navigate(`/selectseats/${cityy}`)
    }

    const citiesList = ["Rajpur", "Haryana", "Amritsar", "Nagour", "Pune", "Nashik", "Goa"]
  return (
    <div className='cities-page-container flex flex-col bg-stone-100'>
        <div className='h-[100px] flex justify-center items-center'>
            <p className='font-bold text-3xl'>Select your Location</p>
        </div>
            {
                citiesList.map((city) => (
                    <div className='flex flex-col'>
                        <div className='flex justify-between py-2 border border-black m-[1px] bg-white cursor-pointer' onClick={() => handleNavigate(city)}>
                            <img className='w-[34px] h-[28px] ml-4' src='https://s3-alpha-sig.figma.com/img/e13b/a458/dcb024296ef81c02bf4afcd151c7bc51?Expires=1684713600&Signature=gp5A0X3bnaL~c5YUSYGLmYoxQxPDf2Yg8IgzGGy92NB1zfqrvMfWSiM~U-mxjbuifoAty6wg7iwkhDcIT~qaDbqHblqoUtgRjwQwQeCb-hhvUSaSTmjZeuxmmHcDjMbMpI1wH6ue3ee7u3a7na0S02pxU63pcWFoZ6ztwMB3LmcPYiNP1mU5t6Co4qdbLY~D7j75RDnUYmQQ4zugsRi9bcvoxdvh4~Co4mbPbqXXXbd~lC7XDk32GcwOdZh9Chct27n8AV2mQJhu9HEwZ4n5BrfpExl8qaFmmCLC07TmdzZN9v3S4hQs3xzJueAUc5bXXwwew-ohet7UieUGUSBjow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='building' />
                            <p className='w-1/3 ml-6 text-black font-bold text-base'>{city}</p>
                            <p className='w-1/3 text-center text-[#474747]'>Date</p>
                            <p className='w-1/3 text-right mr-6 flex justify-end items-center '>
                                <img className='w-[30px] h-[22px] text-[#474747]' src='https://s3-alpha-sig.figma.com/img/5aff/f188/04aaba44a8d9d12ee707c6e79e1580f9?Expires=1684713600&Signature=gkP4HsI~Y5E~Q~ttTz0R7RGkn6ReJ89Xma6WL5oupXojgZSXtuIg-adKDm2IiNZFnM0ozxkv9ZT6y0XZU3Gx8Pqa0BkefnZruMzZTD~2Vy92hqOF~5ccHNHUj2u1e58FVZpAEhCitY2VF5M~I02Vp0zYJbEURMAEBYtC8t14Dn~JANddynNQF5FVHhBM8e6vLcd5F68tOl72263NIZE-tomwciYPj~7TJ9FKJ1lcDFZxLTkaJj~wO2-PbGqJrRocBu~slvNCPI5n6BxWHpPyb5QgnbyifgYiKzx6vgQCzIdy06jWHC7jlqhUGHVb1AsUAP9P0OUs2Sb2LZPdFjW0jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='arrow'></img>
                            </p>
                        </div>                    
                    </div>
                ))
            }
        <div className='flex justify-center items-center flex-col h-[200px]'>
            <p className='mb-4 text-3xl text-gray-400'>Not found the city you are looking for?</p>
            <button className='bg-gray-300 rounded-full p-3'>Contact Sales</button>
        </div>
    </div>
  )
}

export default Cities