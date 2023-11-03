import { Button } from "@nextui-org/react";

export default function Buttons({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      radius="md"
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
