type NodeLabelProps = {
  label: string;
};

export const NodeLabel = ({ label }: NodeLabelProps) => {
  return (
    <p className="font-semibold text-xl text-center font-sans tracking-wider">
      {label}
    </p>
  );
};
