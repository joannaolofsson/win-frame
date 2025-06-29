import { create } from 'zustand';
//import { nanoid } from 'nanoid';
import { LogicState, SmallWin, UIState, FrameGoal } from '@/lib/state';
//import { supabase } from '@/lib/supabase';

const id = crypto.randomUUID();

export const useAppStore = create<UIState & LogicState>((set, get) => ({

    // UI State 
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),

    // Logic state
    goals: [],
    selectedGoalId: null,
    wins: [],
   
    addGoal: (goal: FrameGoal) =>
        set((state) => ({
            goals: [...state.goals, goal],
        })),

    selectedGoal: (goalId) =>
        set(() => ({
            selectedGoalId: goalId,
        })),

    addWin: (content) => {
        const selectedGoalId = get().selectedGoalId;
        if (!selectedGoalId) return;
        const newWin: SmallWin = {
            id: crypto.randomUUID(),
            content,
            goalId: selectedGoalId,
            createdAt: new Date().toISOString(),
        };
          set((state) => ({
            wins: [...state.wins, newWin],
          }));
    },
}));
