export const PublicContainer = ({
  children,
  gray,
  className,
}: {
  children: JSX.Element[] | JSX.Element | any;
  gray?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`w-[80%] mx-auto my-4 sm:w-3/4 md:w-[360px] lg:w-[360px] ${className}`}
    >
      <div
        className={`rounded-3xl bg-white p-3 border-[3px] border-blue-250 
          ${gray && "bg-gray-200"}`}
      >
        {children}
      </div>
    </div>
  );
};
