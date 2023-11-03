import { Input } from "@nextui-org/react";
// import Buttons from "./Button";
import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/user";
import { loadingState } from "../store/loading";
import Buttons from "./Button";

const searchString = gql`
  query ExampleQuery($search: String!) {
    searchUser(search: $search) {
      firstName
      id
      image
    }
  }
`;
export default function Search() {
  const [searchinnput, setSearchInput] = useState("");
  const setSearchData = useSetRecoilState(userState);
  const setLoadingState = useSetRecoilState(loadingState);
  const [getSearchResult] = useLazyQuery(searchString, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      setSearchData(data.searchUser);
      setLoadingState(false);
    },
  });

  const searchIt = () => {
    getSearchResult({
      variables: {
        search: searchinnput,
      },
    });
  };

  return (
    <div className="flex gap-3">
      <Input
        type="text"
        placeholder="user"
        value={searchinnput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        className="max-w-xs w-[300px]"
      />
      <Buttons
        onClick={() => {
          setLoadingState(true);
          searchIt();
        }}
      >
        Search
      </Buttons>
    </div>
  );
}
