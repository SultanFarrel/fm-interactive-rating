export function Description({ children, isSubmit }) {
  return (
    <p className={`text-grey-500 text-xs ${isSubmit ? "text-center" : null}`}>
      {children}
    </p>
  );
}
