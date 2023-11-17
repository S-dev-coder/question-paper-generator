function calculateDistribution(totalMarks, percentages) {
  const distribution = {};

  Object.entries(percentages).forEach(([difficulty, percentage]) => {
    distribution[difficulty] = (totalMarks * percentage) / 100;
  });

  return distribution;
}

module.exports = calculateDistribution;
