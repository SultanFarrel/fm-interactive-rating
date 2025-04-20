export function ButtonCTA({ setIsSubmit, rate }) {
  function handleSubmit() {
    if (!rate) return alert("Please select a rating first.");
    setIsSubmit(true);
  }

  return (
    <button
      className="text-xs font-medium rounded-full bg-primary py-2 w-full flex justify-center cursor-pointer"
      onClick={() => handleSubmit()}
    >
      SUBMIT
    </button>
  );
}
