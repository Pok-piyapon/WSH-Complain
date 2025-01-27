import React, { createContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../styles/styles.css';
import { View } from 'react-native';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        data: null,
        isLogin: false
    });

    const contextValue = {
        state,
        setState,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <SafeAreaProvider>
                <View style={styles.ProtectFrame}>
                    {children}
                </View>
            </SafeAreaProvider>
        </AppContext.Provider>
    );
};
