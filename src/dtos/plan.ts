import { PlanType } from "@/enums/plan";

export interface PlanResponseDto {
    id: string;
    type: PlanType;
    name: string;
    description: string;
    price: number;
    benefits: string[];
    maxSubmissions: number;
    maxVideos: number;
    maxPromotionalImages: number;
    maxServiceAssignments: number;
    maxSocialMediaPosts: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export class CreatePlanDto {
    name: string;
    type: PlanType;
    description: string;
    price: number;
    benefits: string[];
    maxSubmissions: number;
    maxVideos: number;
    maxPromotionalImages: number;
    maxServiceAssignments: number;
    maxSocialMediaPosts: number;
    isActive?: boolean;
}

export type UpdatePlanDto = Partial<Omit<CreatePlanDto, 'type' | 'isActive'>>;