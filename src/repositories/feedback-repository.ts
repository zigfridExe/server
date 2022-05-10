export interface feedbackCreateData {
    type: string;
    coment: string;
    screenshot?: string;
}

export interface feedbacksRepository {
    create: (data: feedbackCreateData) => Promise<void>;
}