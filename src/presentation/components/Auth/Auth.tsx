import React, { useEffect } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
      const { initDataRaw } = retrieveLaunchParams();
      console.log(initDataRaw)
    }, []);

    return (
      <>
        {children}
      </>
    );
  };
