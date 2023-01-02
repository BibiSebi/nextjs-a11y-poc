import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
};

export const Default = <Button/>

export const Accessible = () => <button>Accessible button</button>;

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
);

