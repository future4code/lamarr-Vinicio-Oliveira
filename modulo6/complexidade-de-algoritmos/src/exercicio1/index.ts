const findFirstRecurringCharacter = (input: any) => {
    const charHashMap: any = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
        console.count()
      }
      charHashMap[char] = true;
    }
    return null;
  }; 

  // R: O(n)