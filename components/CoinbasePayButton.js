import { useEffect, useRef, useState } from "react";
import { initOnRamp } from "@coinbase/cbpay-js";
import Link from "next/link";
import styles from "../styles/cart.module.css";
import { useRouter } from "next/router";

function CoinbasePayButton({ destinationWalletAddress }) {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef();

  const router = useRouter();

  useEffect(() => {
    //initOnRamp parameters
    const options = {
      appId: process.env.NEXT_PUBLIC_COINBASE_APP_ID,
      target: "#cbpay-container",
      widgetParameters: {
        destinationWallets: [
          {
            address: destinationWalletAddress,
            blockchains: ["ethereum", "algorand"],
          },
        ],
      },
      onSuccess: () => {
        // handle navigation when user successfully completes the flow
      },
      onExit: () => {
        // handle navigation from dismiss / exit events due to errors
        router.push("/payment-failure");
      },
      onEvent: (event) => {
        // event stream
        console.log({ event });
      },
      experienceLoggedIn: "embedded",
      experienceLoggedOut: "popup",
    };

    // instance.destroy() should be called before initOnramp if there is already an instance.
    if (onrampInstance.current) {
      onrampInstance.current.destroy();
    }

    initOnRamp(options, (error, instance) => {
      if (instance) {
        onrampInstance.current = instance;
        setIsReady(true);
      }
    });
  }, [destinationWalletAddress]);

  const handleOnPress = () => {
    onrampInstance.current.open();
  };

  // render with button from previous example
  return (
    <Link
      id="cbpay-container"
      href="#"
      onClick={handleOnPress}
      className={`${styles.btn} ${styles.continue} ${styles.cbpay}`}
    >
      <img src="/cbpay.png" alt="coinbase-pay" />
    </Link>
  );
}

export default CoinbasePayButton;
