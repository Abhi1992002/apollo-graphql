import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Link,
} from "@nextui-org/react";
import Chips from "./Chip";
import { gql, useQuery } from "@apollo/client";

export default function Modals({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const getOneUser = gql`
    query AnyName($getUserId: ID!) {
      getUser(id: $getUserId) {
        id
        firstName
        image
        lastName
        age
        gender
        email
        phone
        username
        ip
        domain
        department
      }
    }
  `;

  const { data } = useQuery(getOneUser, {
    variables: {
      getUserId: id,
    },
  });

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          onPress={() => handleOpen()}
          className="capitalize bg-transparent h-auto w-auto p-0 rounded-2xl"
        >
          <Chips name={name} image={image} />
        </Button>
      </div>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <div className="py-4">
              <ModalHeader className="overflow-visible py-2 flex gap-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl border shadow-xl"
                  src={image}
                  width={270}
                />
                <div>
                  <p className="text-large  py-2 font-bold">
                    @{data.getUser.username}
                  </p>
                  <p className="text-tiny uppercase font-bold">
                    {data.getUser.firstName} {data.getUser.lastName} -
                    {data.getUser.gender}
                  </p>

                  <small className="text-default-500">
                    {data.getUser.age} years old
                  </small>
                  <Link className="font-bold text-medium block text-blue-600">
                    {data.getUser.email}
                  </Link>
                  <p className="text-sm py-2">{data.getUser.phone}</p>
                  <p className="text-sm py-2">IP: {data.getUser.ip}</p>
                  <p className="text-sm py-2">Domain: {data.getUser.domain}</p>
                </div>
              </ModalHeader>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
