export const isEqualObject = (obj1: object, obj2: object): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  const prototypesAreEqual = isEqualObject(
    Object.getPrototypeOf(obj1), Object.getPrototypeOf(obj2)
  );

  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isEqualObject(obj1[prop], obj2[prop]))
  )
}
