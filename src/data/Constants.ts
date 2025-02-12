type FeatureProps = {
   plan: string,
   price: number,
   duration: string,
   features: {
    name: string,
    isAvailable: boolean
   }[]

}


export const PLAN_FEATURES: FeatureProps[] = [
    {
        plan: "FREE",
        price: 0,
        duration: "/ Lifetime",
        features: [
            { name: 'ADS', isAvailable: true },
            { name: 'Upto 20 Tables', isAvailable: true },
            { name: '1% Transaction Fee', isAvailable: true },
            { name: 'Standard Customer Support', isAvailable: true },
            { name: '24/7 Technical Support', isAvailable: true },
            { name: 'AI Features', isAvailable: false },
            { name: 'Analytics', isAvailable: false },

    
        ]
    },
    {
        plan: "PREMIUM",
        price: 999,
        duration: "/ Month",
        features: [
            { name: 'No ADS', isAvailable: true },
            { name: 'Unlimited Tables', isAvailable: true },
            { name: '0% Transaction Fee', isAvailable: true },
            { name: 'Standard Customer Support', isAvailable: true },
            { name: '24/7 Technical Support', isAvailable: true },
            { name: 'AI Features', isAvailable: true },
            { name: 'Analytics', isAvailable: true },
    
        ]
    }
]