import axios from "axios";
import { CheckoutProvider, Checkout } from "paytm-blink-checkout-react";
import { useState } from "react";
import InjectedCheckout from "./InjectedCheckout";

const USE_EXISTING_CHECKOUT_INSTANCE = "Use existing checkout instance : ";

const Paytm = () => {
  const [config, setConfig] = useState({});
  const [coin, setCoin] = useState(1);

  const [checkoutJsInstance, setCheckoutJsInstance] = useState(null);

  const loadCheckoutScript = (config) => {
    const url = "https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/";
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = url.concat(config.merchant.mid);
    scriptElement.type = "application/javascript";
    scriptElement.onload = () => {
      const checkoutJsInstance = getCheckoutJsObj();

      if (checkoutJsInstance && checkoutJsInstance.onLoad) {
        checkoutJsInstance.onLoad(() => {
          setConfig(config);
          setCheckoutJsInstance(checkoutJsInstance);
        });
      } else {
        console.error(USE_EXISTING_CHECKOUT_INSTANCE + "onload not available!");
      }
    };
    scriptElement.onerror = (error) => {
      console.error(USE_EXISTING_CHECKOUT_INSTANCE + "script load fail!");
    };
    document.body.appendChild(scriptElement);
  };

  const getCheckoutJsObj = () => {
    if (window && window.Paytm && window.Paytm.CheckoutJS) {
      return window.Paytm.CheckoutJS;
    } else {
      console.error(
        USE_EXISTING_CHECKOUT_INSTANCE + "Checkout instance not found!"
      );
    }

    return null;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/paytm/initiate-payment", { coin });

    if (data.success) {
      const handler = {
        notifyMerchant: (eventType, data) =>
          console.log("MERCHANT NOTIFY LOG :>> ", eventType, data),
      };

      loadCheckoutScript({ ...data.config, handler });
    } else {
      return (
        <div>
          <h1>Error Occured</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <h3>Paytm</h3>
      <form onSubmit={submitHandler}>
        <p>
          Coin:{" "}
          <input
            type="text"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
      <br />

      <CheckoutProvider
        checkoutJsInstance={checkoutJsInstance}
        openInPopup={true}
        config={config}
        env="PROD"
      >
        <InjectedCheckout />
        <Checkout />
      </CheckoutProvider>
    </div>
  );
};

export default Paytm;
