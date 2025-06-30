'use client'
import React, { useState } from 'react';
import { useAppStore } from '@/app/store/useAppStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { frameFeelings } from '@/data/frameFeelings';

export default function AddWinForm() {
    const addSmallWin = useAppStore((state) => state.addSmallWin);
    const [text, setText] = useState('');
    const [emotions, setEmotions] = useState<string[]>([]);
    //const userId = ''; // Maybe replace this...

    

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addSmallWin(text, emotions);
    };

    return (
        <form
            className='flex gap-2 flex flex-col'
        >
            <Input
                value={text}
                onChange={(e) =>
                    setText(e.target.value)}
                placeholder='Add small win...'
            />

            <ToggleGroup
                type="multiple"
                value={emotions}
                onValueChange={setEmotions}
                className="flex flex-wrap gap-1"
            >
                {frameFeelings.map((feeling) => (
                    <ToggleGroupItem
                        key={feeling.id}
                        value={feeling.title}
                        aria-label={feeling.title}
                        className="capitalize px-3"
                    >
                        {feeling.title}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>

            <Button onClick={handleSubmit}>Add</Button>
        </form>
    );
}


