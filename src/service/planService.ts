import axios from 'axios';
import { PlanResponseDto } from '@/dtos/plan';

const BASE_USER_URL = 'https://api.fazedoresangola.ao';

export const planService = {
    getPlans: async (): Promise<PlanResponseDto[]> => {
        const { data } = await axios.get(`${BASE_USER_URL}/plans`);
        return data;
    },
};