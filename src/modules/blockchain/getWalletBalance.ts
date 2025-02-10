import { ethers } from "ethers";

const SONIC_RPC_URL = process.env.SONIC_RPC_URL; // Add this to your .env
const provider = new ethers.JsonRpcProvider(SONIC_RPC_URL);

// Function to check wallet balance
export const getWalletBalance = async (walletAddress: string) => {
  try {
    const balance = await provider.getBalance(walletAddress);
    return ethers.formatEther(balance); // Convert balance to human-readable format
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
    return null;
  }
};
