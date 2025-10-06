import { Suspense } from "react";
import PaymentSuccessClient from "./paymentSuccessClient";


export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
