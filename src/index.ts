function mergeTailwindClasses(currentClassName: string, propClassName: string) {
  if (!propClassName) return currentClassName;

  const mainClassArr = currentClassName.replace(/\s+/g, " ").trim().split(" ");
  const classArr = propClassName.replace(/\s+/g, " ").trim().split(" ");

  classArr.forEach((item) => {
    const [prop, value] = item.split("-");

    // Check if prop exists in mainClassArr
    const index = mainClassArr.findIndex((cls) => cls.startsWith(prop));

    if (index !== -1) {
      // If prop exists, update value
      mainClassArr[index] = `${prop}-${value}`;
    } else {
      // If prop doesn't exist, add new class
      mainClassArr.push(item);
    }
  });

  currentClassName = mainClassArr.join(" ");

  return currentClassName;
}

module.exports = mergeTailwindClasses;
