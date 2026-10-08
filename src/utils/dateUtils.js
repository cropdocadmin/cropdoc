export function getRemainingDays(subscriptionExpiresAt) {
  if (!subscriptionExpiresAt) return 365;
  const expiryDate = new Date(subscriptionExpiresAt);
  const currentDate = new Date();
  const diffTime = expiryDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}
