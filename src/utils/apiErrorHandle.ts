import axios from 'axios';

export interface ApiError {
    message: string;
    status?: number;
    data?: any;
}

export function handleApiError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        return {
            message: error.response?.data?.message || error.message || 'An error occurred',
            status: error.response?.status,
            data: error.response?.data,
        };
    }
    if (error instanceof Error) {
        return { message: error.message };
    }
    return { message: 'An unknown error occurred' };
}