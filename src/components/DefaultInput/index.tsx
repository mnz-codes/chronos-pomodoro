import './styles.module.css';

type DefaultInputProps = { id: string } & React.ComponentProps<'input'>;

export const DefaultInput = ({ id, type }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input type={type} id={id} />
    </>
  );
};
