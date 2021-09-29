function DateBuilder() {
  const todaysDate = () => {
    let today = new Date().toDateString();
    return `${today}`
  }
  return todaysDate()
}
export default DateBuilder;