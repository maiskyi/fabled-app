export const defaultOnCompleted = () => Promise.resolve();

export const groupParagraphs = (text: string, maxLength = 150) => {
  const words = text.split(' ');
  let paragraphs = [];
  let currentParagraph = '';

  words.forEach((word) => {
    if ((currentParagraph + word).length <= maxLength) {
      currentParagraph += (currentParagraph ? ' ' : '') + word;
    } else {
      paragraphs.push(currentParagraph);
      currentParagraph = word;
    }
  });

  if (currentParagraph) {
    paragraphs.push(currentParagraph);
  }

  return paragraphs;
};
