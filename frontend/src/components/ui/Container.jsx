const Container = ({ className = "", children }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
