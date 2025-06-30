'use client';

import React, { useState } from 'react';
//import AuthForm from './AuthForm';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="w-full flex justify-between p-4">
      <h3 className='text-2xl'>Win Frame</h3>
      <Button
        variant="destructive"
        className="w-[80px]"
        onClick={() => setShowLogin(true)}
      >
        Login
      </Button>
      
      {/* Modal (conditionally rendered) */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white max-w-md w-full mx-4 md:mx-0 rounded-xl p-6 shadow-lg animate-slide-up"
            onClick={(e) => e.stopPropagation()} 
          >
            {/*<AuthForm />*/}
            <Button
              variant="ghost"
              className="mt-4 text-sm text-gray-600 hover:text-red-600"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
