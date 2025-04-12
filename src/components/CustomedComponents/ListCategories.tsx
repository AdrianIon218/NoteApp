import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IProps {
  title?: string;
}

export default function ListCategories(props: IProps) {
  const categoryContext = useSelector<RootState>(
    (store) => store.category.categories
  ) as string[];

  return (
    <fieldset className="categories-group">
      <legend>{props.title ?? "Current categories"}</legend>
      <div className="categories-flex">
        {categoryContext.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </fieldset>
  );
}
