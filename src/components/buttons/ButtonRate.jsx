export function ButtonRate({ rate, setRate, maxRate }) {
  return (
    <div className="flex justify-center">
      <button className="flex gap-x-4 mb-6">
        {Array.from({ length: maxRate }, (_, index) => {
          const value = index + 1;
          const isSelected = value === rate;

          return (
            <div
              key={value}
              className={`text-xs rounded-full w-9 h-9 pt-[2px] flex items-center justify-center cursor-pointer active:bg-primary ${
                isSelected
                  ? "bg-primary text-black"
                  : "bg-grey-900 text-grey-500 hover:bg-white hover:text-black"
              }`}
              onClick={() => setRate(value)}
            >
              {value}
            </div>
          );
        })}
      </button>
    </div>
  );
}
