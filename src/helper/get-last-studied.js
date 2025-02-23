const getLastStudiedLabel = (currTimestamp) => {
  const thatDate = new Date(currTimestamp);
  const today = new Date();

  thatDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInTime = today - thatDate;
  const diffInDays = diffInTime / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays > 1 && diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    return thatDate.toLocaleDateString();
  }
};

export default getLastStudiedLabel;
