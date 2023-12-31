import Script from "next/script";
import React from "react";

const Billing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <>
        <title>Billing Page</title>
        <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      </>
      <stripe-pricing-table
        className="flex-1 h-screen"
        pricing-table-id={process.env.STRIPE_PRICING_TABLE_ID}
        publishable-key={process.env.STRIPE_PK}
        style={{ width: "100%", height: "100%" }}
      ></stripe-pricing-table>
    </div>
  );
};

export default Billing;
