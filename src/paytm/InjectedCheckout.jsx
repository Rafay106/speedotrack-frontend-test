import React from "react";
import { injectCheckout } from "paytm-blink-checkout-react";

function InjectedCheckout(props) {
  const checkoutJsInstance = props.checkoutJsInstance;

  return (
    <div>
      <b>IS CHECKOUT JS INJECTED : </b>
      {Boolean(checkoutJsInstance).toString()}
      <p>
        {Boolean(checkoutJsInstance).toString()
          ? checkoutJsInstance?.TOKEN
          : "false"}
      </p>
    </div>
  );
}

export default injectCheckout(InjectedCheckout);
