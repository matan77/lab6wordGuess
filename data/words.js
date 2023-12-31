const words = [
    'apple', 
    'banana', 
    'orange', 
    'grape', 
    'strawberry', 
    'watermelon', 
    'pineapple', 
    'blueberry', 
    'peach', 
    'kiwi', 
    'mango', 
    'pear', 
    'cherry', 
    'apricot', 
    'plum',
  ];  
  
export const getRandomWord = () => words[Math.floor(Math.random() * words.length)]
export const getRandomLetter = () => String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0) + 1)))