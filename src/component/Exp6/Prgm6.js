import React, { useState } from 'react'

export default function Prgm6() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
        // console.log('Type Of regEx',typeof(regex));
        // console.log(regex);
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'

        if (!formData.email.trim()) {
            newErrors.email = 'email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid Email format'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Form Data : ', formData);
            alert(`Form Submitted successfully\n\nName: ${formData.name}\nEmail: ${formData.email}`)
        }
    }

    const handleChange = (e) => {
        validateForm()
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const togglepasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <div6>
            <h1>6. Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <div61>
                    <div612 className={errors.name ? 'error' : ''}>
                        <label>Name:</label>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='John' />
                    </div612>
                    {errors.name && <span className='error-text'>{errors.name}</span>}
                </div61>

                <div61>
                    <div612 className={errors.email ? 'error' : ''}>
                        <label>Email:</label>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='example@gmail.com' />
                    </div612>
                    {errors.email && <span className='error-text'>{errors.email}</span>}
                </div61>

                <div61>
                    <div612 className={errors.password ? 'error' : ''}>
                        <label>Password:</label>
                        <input type={showPassword ? 'text' : 'password'} name='password' value={formData.password} onChange={handleChange} placeholder='password' />
                    </div612>
                    {errors.password && <span className='error-text'>{errors.password}</span>}
                    <span className='showPassword-button' onClick={togglepasswordVisibility}>{showPassword ? 'Hide' : 'Show'} password</span>
                </div61>

                <button type='submit'>submit</button>
            </form>
        </div6>
    )
}