import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Search from "./components/Search";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./store/user";
import { loadingState } from "./store/loading";
import { Loader, Loader2 } from "lucide-react";
import Modals from "./components/Modal";
const query = gql`
  query AnyName {
    getAllUsers {
      id
      firstName
      image
    }
  }
`;

type UserType = {
  id: string;
  firstName: string;
  image: string;
};

function App() {
  const [user, setUser] = useRecoilState(userState);
  const laodingValue = useRecoilValue(loadingState);
  const { loading, error } = useQuery(query, {
    onCompleted: (data) => {
      setUser(data.getAllUsers);
    },
  });
  if (loading)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader2 className="w-24 h-24 animate-spin" />
      </div>
    );
  if (error) return <h1>Error.....</h1>;

  return (
    <div className="flex pt-[100px] flex-col gap-20 items-center  flex-wrap justify-center">
      <Search />
      <div className=" w-[70vw] flex items-center justify-center flex-wrap gap-8">
        {laodingValue ? (
          <Loader className="animate-spin w-8 h-8 " />
        ) : (
          user.map((user: UserType) => {
            return (
              <div key={user.id}>
                <Modals id={user.id} name={user.firstName} image={user.image} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
