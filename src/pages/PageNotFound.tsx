const PageNotFound = () => {
    return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src="/404.svg" alt="404 Not Found" className="w-1/8 mb-8" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default PageNotFound;