import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form  className={classes.form}>
      <div>
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            max: "5",
            min: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
