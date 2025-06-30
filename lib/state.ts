
export type UIState = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export type SmallWin = {
    id: string;
    goalId: string;
    text: string | undefined;
    emotions?: string[];
    createdAt: string;
}

export type FrameGoal = {
    id: string;
    title: string;
    description?: string;
}

export type Progress = {
    [goalId: string]: number;
}

export type LogicState = {
    selectedGoals: FrameGoal[];
    activeGoalId: string | null;
    smallwins: SmallWin[];
    setSelectedGoals: (goal: FrameGoal) => void;
    setActiveGoal: (goalId: string) => void;
    addSmallWin: (win: SmallWin) => void;
}