
type NodeLabelProps = {
  label: string;
};

export const NodeLabel = ({ label }: NodeLabelProps) => {
  return (
    <p
    className="font-[600] text-xl text-center font-sans trackling-[1]"
    >
      {label}
    </p>
  );
};
