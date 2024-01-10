import { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites - Notedly";
  }, []);
  return (
    <div>
      <h1>Notedly</h1>
      <p>This is the favorites page</p>
    </div>
  );
};

export default Favorites;
