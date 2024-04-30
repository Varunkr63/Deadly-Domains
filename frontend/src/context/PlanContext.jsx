import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const HOSTING_VENDORS = [
    {
        name: 'Go Daddy'
    },
    {
        name: 'Host Gator'
    },
    {
        name: 'Blue Host'
    },
    {
        name: 'Site Ground'
    },
    {
        name: 'Dream Host'
    },
    {
        name: 'Host Papa'
    },
    {
        name: 'A2 Hosting'
    },
    {
        name: 'In Motion Hosting'
    },
    {
        name: 'Host Winds'
    },
    {
        name: 'Green Geeks'
    },
    {
        name: 'Liquid Web'
    },
    {
        name: 'Kinsta'
    },
    {
        name: 'WP Engine'
    },
    {
        name: 'Fly Wheel'
    },
    {
        name: 'Pagely'
    },
    {
        name: 'Pressable'
    },
    {
        name: 'Pressidium'
    },
    {
        name: 'Cloudways'
    },
    {
        name: 'Nestify'
    },
    {
        name: 'Pantheon'
    },
    {
        name: 'Site 5'
    },
    {
        name: 'Web Synthesis'
    },
    {
        name: 'WPX Hosting'
    },
    {
        name: 'Media Temple'
    },
    {
        name: 'Rackspace'
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