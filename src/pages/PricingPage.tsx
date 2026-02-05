import { PricingContainer, PricingPlan } from "@/components/ui/pricing-container";

const DEMO_PLANS: PricingPlan[] = [
    {
        name: "Starter",
        monthlyPrice: 249,
        yearlyPrice: 2490,
        features: ["3 Devices", "5 Past History", "5GB Data History Storage", "Basic Support"],
        isPopular: false,
        accent: "bg-rose-500",
        rotation: -2
    },
    {
        name: "Pro",
        monthlyPrice: 849,
        yearlyPrice: 8490,
        features: ["5 Devices", "10 Past History", "15GB Data History Storage", "Special Support"],
        isPopular: true,
        accent: "bg-blue-500",
        rotation: 1
    },
    {
        name: "Enterprise",
        monthlyPrice: 1699,
        yearlyPrice: 16990,
        features: ["Unlimited Devices", "Unlimited Past History", "Unlimited Data Storage", "Special Support"],
        isPopular: false,
        accent: "bg-purple-500",
        rotation: 2
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black pt-20">
            <PricingContainer
                title="Choose Your Perfect Plan"
                plans={DEMO_PLANS}
                darkMode={true}
            />
        </div>
    );
};
