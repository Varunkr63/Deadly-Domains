import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const HOSTING_VENDORS = [
    {
        name: 'Go Daddy',
        icon: '/go-daddy.png'
    },
    {
        name: 'Host Gator',
        icon: '/host-gator.png'
    },
    {
        name: 'Blue Host',
        icon: '/blue-host.png'
    },
    {
        name: 'Site Ground',
        icon: '/site-ground.png'
    },
    {
        name: 'Dream Host',
        icon: '/dream-host.png'
    },
    {
        name: 'Host Papa',
        icon: '/host-papa.png'
    },
    {
        name: 'A2 Hosting',
        icon: '/a2-hosting.png'
    },
    {
        name: 'In Motion',
        icon: '/in-motion.png'
    },
    {
        name: 'Hostinger',
        icon: '/hostinger.png'
    },
    {
        name: 'Green Geeks',
        icon: '/green-geeks.png'
    }
]

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    const logout = () => {
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        setLoggedIn(false);
        router.push('/authenticate');
    }

    return (
        <PlanContext.Provider value={{
            currentUser,
            setCurrentUser,
            loggedIn,
            setLoggedIn,
            logout,
            HOSTING_VENDORS
        }}>
            {children}
        </PlanContext.Provider>
    )
}

const usePlanContext = () => useContext(PlanContext);

export default usePlanContext;