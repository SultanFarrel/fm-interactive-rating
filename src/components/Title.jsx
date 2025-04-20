export function Title({ children, isSubmit }) {
  return (
    <h1
      className={`text-white text-xl mb-4 ${
        isSubmit ? "text-center py-2" : null
      }`}
    >
      {children}
    </h1>
  );
}
