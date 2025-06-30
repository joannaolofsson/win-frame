'use client';
import React from 'react';
import { useAppStore } from '../store/useAppStore';
import AddWinForm from '../features/goals/AddWinForm';

export default function WinBoard() {
    const wins = useAppStore((state) => state.wins);
    const goal = useAppStore((state) => state.goals);

    const goals = useAppStore((state) => state.goals);
    const selectedGoalId = useAppStore((state) => state.selectedGoalId);
    const selectedGoal = goals.find(goal => goal.id === selectedGoalId);

  return (
    <div className='container'>
      <div className=''>
      <AddWinForm />
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          Your goal: {selectedGoal?.title ?? 'None selected yet'}
        </h2>
        {wins.map(win => (
          <div key={win.id} className="p-2 bg-gray-100 rounded">
            {win.content}
          </div>
        ))}
        </div>
    </div>
  );
}
