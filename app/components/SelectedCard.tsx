import React from 'react'
import { Card, 
CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent } from '../../components/ui/card'
//import { LogicState } from '@/lib/state'
import { useState } from 'react';

const goals = [
  { id: '1', title: 'Say now' },
  { id: '2', title: 'Stand up for yourself' },
  { id: '3', title: 'Take a breath before speaking' },
];

export default function SelectedCard() {
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

   return (
   <div>
  {goals.map(goal => (
    <Card
      key={goal.id}
      onClick={() => setSelectedGoal(goal.id)}
      className="cursor-pointer"
    >
      <CardHeader>
        <CardTitle>{goal.title}</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent />
      <CardFooter />
    </Card>
  ))}
</div>
)}
