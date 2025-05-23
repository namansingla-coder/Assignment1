import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
export default function Login({handleCredentials}) {
  const [details, setDetails] = useState({ countryCode: '+91' });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const countryCityData = {
    India: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    'United States': ["New York", "Los Angeles", "Chicago", "Houston"],
    'United Kingdom': ["London", "Manchester", "Birmingham"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    Australia: ["Sydney", "Melbourne", "Brisbane"],
    Germany: ["Berlin", "Munich", "Frankfurt"],
    France: ["Paris", "Lyon", "Marseille"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    China: ["Beijing", "Shanghai", "Guangzhou"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Brasília"],
  };

  const validate = () => {
    const newErrors = {};
    if (!details.firstName) newErrors.firstName = 'First Name is required';
    if (!details.lastName) newErrors.lastName = 'Last Name is required';
    if (!details.userName) newErrors.userName = 'Username is required';
    if (!details.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) newErrors.email = 'Invalid email';
    if (!details.password || details.password.length<8) newErrors.password = 'Password must be 8 characters';
    if(!details.countryCode) newErrors.countryCode = 'Country Code is required';
    else if(details.countryCode[0]!='+') newErrors.countryCode = 'Country Code must contain "+" in starting';
    if (!details.phoneNo) newErrors.phoneNo = 'Phone number is required';
    if (!details.country) newErrors.country = 'Country is required';
    if (!details.city) newErrors.city = 'City is required';
    if (!details.panNo || details.panNo.length !== 10) newErrors.panNo = 'PAN number must be 10 characters';
    if (!details.adhaarNo || details.adhaarNo.length !== 12) newErrors.adhaarNo = 'Aadhar number must be 12 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        handleCredentials(details);
      navigate('/post-submission', { state: details });
    }
  };

  const cities = countryCityData[details.country] || [];

  return (
    <div className='flex justify-center min-h-screen items-center my-8'>
      <div className='px-6 py-4 border-2 rounded-md border-red-200 w-[500px]'>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <Input field='firstName' name="First Name" handleChange={handleChange} errors={errors} details={details}/>
        <Input field='lastName' name="Last Name" handleChange={handleChange} errors={errors} details={details}/>
        <Input field='userName' name="UserName" handleChange={handleChange} errors={errors} details={details}/>
        <Input field='email' name="E-mail" handleChange={handleChange} errors={errors} details={details}/>

        <label htmlFor='password'>
            <p className='font-bold'>Password</p>
            <div className='flex'>
              <input
                id='password'
                className='px-2 border-2 rounded-md w-full'
                type={show ? 'text' : 'password'}
                name='password'
                value={details.password || ''}
                onChange={handleChange}
              />
              <button type='button' onClick={() => setShow(!show)}>
                {show ? <FaRegEye className='w-8' /> : <FaRegEyeSlash className='w-8' />}
              </button>
            </div>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
        </label>

        <label htmlFor='phoneNo'>
            <p className='font-bold'>Phone No.</p>
            <div className='flex gap-2'>
              <input className='px-2 border-2 rounded-md w-16' name='countryCode' value={details.countryCode} onChange={handleChange} />
              <input id='phoneNo' className='px-2 border-2 rounded-md w-full' type='number' name='phoneNo' value={details.phoneNo || ''} onChange={handleChange} />
            </div>
            {errors.countryCode && <p className='text-red-500 text-sm'>{errors.countryCode}</p>}
            {errors.phoneNo && <p className='text-red-500 text-sm'>{errors.phoneNo}</p>}
        </label>

        <label htmlFor='country'>
            <p className='font-bold'>Country</p>
            <select id='country' className='w-full px-2 border-2 rounded-md' name='country' value={details.country || ''} onChange={handleChange}>
              <option value=''>Select Country</option>
              {Object.keys(countryCityData).map(code => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
            {errors.country && <p className='text-red-500 text-sm'>{errors.country}</p>}
        </label>

        <label htmlFor='city'>
            <p className='font-bold'>City</p>
            <select id='city' className='w-full px-2 border-2 rounded-md' name='city' value={details.city || ''} onChange={handleChange}>
              <option value=''>Select City</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
            {errors.city && <p className='text-red-500 text-sm'>{errors.city}</p>}
        </label>
        <Input field='panNo' name="Pan Number" handleChange={handleChange} errors={errors} details={details}/>
        <Input field='adhaarNo' name="Adhaar Number" handleChange={handleChange} errors={errors} details={details}/>
        <button type='submit' className='border-2 border-blue-600 text-blue-600 rounded-md w-20 self-center'>Submit</button>
    </form>
    </div>
    </div>
  );
}
