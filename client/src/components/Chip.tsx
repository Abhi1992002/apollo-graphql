import { Chip, Avatar } from "@nextui-org/react";

type chipType = {
  name: string;
  image: string;
};

export default function Chips({ name, image }: chipType) {
  return (
    <div className="flex gap-4">
      <Chip
        variant="flat"
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 "
        avatar={<Avatar name="JW" src={image} />}
      >
        {name}
      </Chip>
    </div>
  );
}
