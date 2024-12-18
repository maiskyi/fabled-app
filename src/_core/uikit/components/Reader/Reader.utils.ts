export const defaultOnCompleted = () => Promise.resolve();

export const groupParagraphs = (
  paragraphs: string[],
  maxLength = 150,
  maxDiff = 20
) => {
  const groups = [];
  let currentGroup: string[] = [];
  let currentLength = 0;

  paragraphs.forEach((paragraph) => {
    const paragraphLength = paragraph.length;

    // Check if adding the current paragraph would exceed the acceptable range
    if (currentLength + paragraphLength <= maxLength + maxDiff) {
      currentGroup.push(paragraph);
      currentLength += paragraphLength;
    } else {
      // Push the current group to groups and start a new one
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
      }
      currentGroup = [paragraph];
      currentLength = paragraphLength;
    }
  });

  // Add the last group if it has content
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
};
