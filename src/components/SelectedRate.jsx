export function SelectedRate({ rate, maxRate }) {
  return (
    <div className="my-4">
      <h1 className="bg-grey-900 rounded-full py-2 text-sm text-primary w-42 text-center mx-auto">
        You selected {rate} out of {maxRate}
      </h1>
    </div>
  );
}
