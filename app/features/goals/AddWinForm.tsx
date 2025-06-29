'use client'
import React, {useState} from 'react';
import { useAppStore } from '@/app/store/useAppStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AddWinForm() {
    const addWin = useAppStore((state) => state.addWin);
    const [text, setText] = useState('');
    const userId = ''; // Maybe replace this...

  return (
    <form
    onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) {
            addWin(text);
            setText('');
        }
    }}
    className='flex gap-2'
    >
        <Input 
            value={text} 
            onChange={(e) => 
            setText(e.target.value)} 
            placeholder='Add small win...' 
        />
        <Button type='submit'>Add</Button>
    </form>
  );
}


