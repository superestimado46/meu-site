export interface FeatureItem {
    id: number;
    title: string;
    description: string;
}

export interface PricingTier {
    id: string;
    price: string;
    title: string;
    features: string[];
    highlight: boolean;
    buttonText: string;
    link: string;
}