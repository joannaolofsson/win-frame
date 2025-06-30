'use client';
import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../components/ui/card';
import { useAppStore } from '../store/useAppStore';
import { frameGoals } from '../../data/frameGoals';

export default function GoalSelector() {
  const toggleGoal = useAppStore((s) => s.toggleGoal);
  const selectedGoals = useAppStore((s) => s.selectedGoals);
  const setSelectedGoals = useAppStore((s) => s.setSelectedGoals);
  const activeGoalId = useAppStore((s) => s.activeGoalId);
  const setActiveGoal = useAppStore((s) => s.setActiveGoal);

  

  // Optionally pre-fill 1–2 default goals
  useEffect(() => {
    setSelectedGoals(frameGoals.slice(0, 2));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {frameGoals.map((goal) => {
        const isSelected = selectedGoals.some((g) => g.id === goal.id);
        return (
            <Card
            key={goal.id}
            onClick={() => {
                toggleGoal(goal);
                if (!isSelected && selectedGoals.length < 4) {
                setActiveGoal(goal.id);
                }
            }}
            className={`cursor-pointer transition ${
                isSelected
                ? activeGoalId === goal.id
                    ? 'border-blue-700 border-2'
                    : 'border-blue-300 border'
                : 'border-gray-200'
            }`}
            >
            <CardHeader>
              <CardTitle>{goal.title}</CardTitle>
              <CardDescription>{goal.description}</CardDescription>
            </CardHeader>
            <CardContent />
            <CardFooter />
          </Card>
        );
      })}
    </div>
  );
}
