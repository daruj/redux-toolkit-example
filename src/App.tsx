import './App.css'

import React, { useCallback, useEffect } from 'react'
import { getUserProfile, isUserLogged, login, logout } from './redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg'

const App = () => {
    const dispatch = useDispatch()
    const user = useSelector(getUserProfile)
    const isLogged = useSelector(isUserLogged)

    useEffect(() => {
        dispatch(login())
    }, [dispatch])

    const onLogOut = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <div className='App'>
            <header className='App-header'>
                <button onClick={onLogOut}>Log Out</button>
                <img src={logo} className='App-logo' alt='logo' />
                <p>{isLogged ? `Hello ${user?.name} ${user?.surname}` : 'El usuario no está loggeado'}</p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
