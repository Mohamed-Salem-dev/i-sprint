
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`container mx-auto 2xl:px-28 px-4 relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}
