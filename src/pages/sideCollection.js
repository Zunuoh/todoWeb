import React, { useState } from "react";
import { Bell, Play, Plus } from "react-feather";
const collectionList = [
  { id: "0", name: "School", icon: <Bell /> },
  { id: "1", name: "Personal", icon: <Plus /> },
  { id: "2", name: "Design", icon: <Play /> },
];

const SideCollection = () => {
  const [collections] = useState(collectionList);
  return (
    <div className="collectionContainer">
      <div className="collectionHeader">COLLECTIONS</div>

      {collections &&
        collections.map((collection) => {
          return (
            <div className="collections">
              <div className="collection">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#77BEBB",
                  }}
                >
                  {collection.icon}
                </div>
                <div
                  style={{
                    marginLeft: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {collection.name}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SideCollection;
