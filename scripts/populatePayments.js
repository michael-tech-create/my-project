// scripts/populatePayments.js
import { db } from "../config/firebaseconfig.js"; // <-- correct relative path
import { collection, addDoc } from "firebase/firestore";

async function populatePayments() {
  try {
    const paymentsRef = collection(db, "payments");

    const sampleAccounts = [
      {
        bank: "First Bank",
        accountNumber: "1234567890",
        accountName: "Campus SkillHub",
      },
      {
        bank: "GTBank",
        accountNumber: "0987654321",
        accountName: "Campus SkillHub",
      },
      {
        bank: "Zenith Bank",
        accountNumber: "1122334455",
        accountName: "Campus SkillHub",
      },
    ];

    for (const account of sampleAccounts) {
      await addDoc(paymentsRef, account);
      console.log(`✅ Added account: ${account.bank} - ${account.accountNumber}`);
    }

    console.log("🎉 All sample payment accounts added successfully!");
  } catch (err) {
    console.error("❌ Error populating payments:", err);
  }
}

// Run the function
populatePayments();
