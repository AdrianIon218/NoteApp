import { CategoryContext } from "../../contexts/CategoryContext";
import { useContext } from "react";

interface IProps {
  title?: string;
}

export default function ListCategories(props: IProps) {
  const categoryContext = useContext(CategoryContext);

  return (
    <fieldset className="categories-group">
      <legend>{props.title ?? "Current categories"}</legend>
      {categoryContext.getCategories().map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </fieldset>
  );
}
