import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({pricingPromise}) => {
    const pricingDta = use(pricingPromise);
    console.log(pricingDta);
    return (
        <div>
           <h2 className="text-5xl">Get our membership</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {
                pricingDta.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
             }
           </div>
        </div>
    )
}
export default PricingOptions;