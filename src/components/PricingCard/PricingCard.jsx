import React from "react";
import FeatureCard from "./featureCard";

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {name, price, description, features} = pricing;
    return (
        <div className="flex flex-col border bg-amber-600 rounded">
           {/*card header*/}
           <div>
            <h1 className="text-5xl">{name}</h1>
            <h4 className="text-3xl">{price}</h4>
           </div>
           {/*card body */}
           <div className="bg-amber-400 p-4 rounded-2xl flex-1 mx-4">
              <p>{description}</p>
              {
                features.map((feature, index)=> <FeatureCard key={index} feature={feature}></FeatureCard>)
              }
           </div>
           <button className="btn bg-black text-white  mt-4">Subscribe</button>
        </div>
    )
}
export default PricingCard;