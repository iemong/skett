export const convertLinkHTML = (text: string) => {
  return text.replace(
    /(https?:\/\/[a-zA-Z0-9\-_.:@!~*'(¥);/?&=+$,%#]+)/g,
    '<a href=$1 target="_blank" rel="noopener">$1</a>'
  )
}
