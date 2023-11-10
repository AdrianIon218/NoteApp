import { useCategory } from "../Contexts/CategoryContext";

interface IProps {
  title?: string;
}

export default function ListCategories(props: IProps) {
  const categoryContext = useCategory();

  return (
    <fieldset className="categories-group">
      <legend>{props.title ?? "Current categories"}</legend>
      <div className="categories-flex">
        {categoryContext.getCategories().map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </fieldset>
  );
}
