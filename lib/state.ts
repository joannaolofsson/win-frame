
export type UIState = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export type SmallWin = {
    id: string;
    goalId: string;
    content: string;
    emotion?: string;
    createdAt: string;
}

export type FrameGoal = {
    id: string;
    title: string;
    description: string;
}

export type Progress = {
    [goalId: string]: number;
}

export type LogicState = {
    goals: FrameGoal[];
    selectedGoalId: string | null;
    wins: SmallWin[];
    addGoal: (goal: FrameGoal) => void;
    selectedGoal: (goalId: string) => void;
    addWin: (content: string) => void;
}