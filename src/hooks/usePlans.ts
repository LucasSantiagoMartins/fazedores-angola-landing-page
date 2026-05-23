import { useState, useCallback, useEffect } from "react";
import { PlanResponseDto } from "@/dtos/plan";
import { planService } from "@/service/planService";

export const usePlans = () => {
    const [plans, setPlans] = useState<PlanResponseDto[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPlans = useCallback(async () => {
        setLoading(true);
        try {
            const response = await planService.getPlans();

            if (Array.isArray(response)) {
                setPlans(response);
            } else {
                // @ts-ignore
                setPlans(response?.data || []);
            }
        } catch (err) {
            setPlans([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPlans();
    }, [fetchPlans]);

    return {
        plans,
        loading,
        refresh: fetchPlans
    };
};